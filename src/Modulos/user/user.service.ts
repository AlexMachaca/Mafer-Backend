import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/UserEntity.entity';
import { Repository } from 'typeorm';
import { ValidateService } from 'src/Common/Validate/validate.service';
import { CreateUserRequest } from './request/CreateUserRequest.request';
import { UpdateUserRequest } from './request/UpdateUserRequest.request';
import { DateRangeDto } from './request/DateRangeDto.dto';
import * as moment from 'moment-timezone';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private validateService: ValidateService,
      ) {
      }
    

  async insertUser(request: CreateUserRequest) {
    try {
      let band: { success: boolean, msg: string };
      band = await this.validateService.validateDni(request.Dni);
      
      if (!band.success) {
        return { msg: band.msg, success: band.success, data: null };
      }
  
      band = await this.validateService.validatePhoneNumber(request.Phone);
      
      if (!band.success) {
        return { msg: band.msg, success: band.success, data: null };
      }
  
      band = await this.validateService.validateFirstName(request.FirstName);
      
      if (!band.success) {
        return { msg: band.msg, success: band.success, data: null };
      }
  
      band = await this.validateService.validateLastName(request.LastName);
  
      if (!band.success) {
        return { msg: band.msg, success: band.success, data: null };
      }
  
      const userDni = await this.userRepository.findOne({ where: { Dni: request.Dni } });
  
      if (userDni) {
        return { msg: "Ya se registró un usuario con ese DNI", success: false, data: null };
      }

      const userMail = await this.userRepository.findOne({ where: { Mail: request.Mail } });
  
      if (userMail) {
        return { msg: "Ya se registró un usuario con ese EMAIL", success: false, data: null };
      }
  
      const newUser = this.userRepository.create({
        FirstName: request.FirstName,
        LastName: request.LastName,
        Password: request.Password,
        BirthDate: request.BirthDate,
        Phone: request.Phone,
        Dni: request.Dni,
        Mail: request.Mail,
        Rol: request.Rol,
        Address: request.Address,
        DateCreated:moment.tz('America/Lima').toDate(),
        Deleted:false
      });
  
      // Guardar la nueva entidad de usuario en la base de datos
      await this.userRepository.save(newUser);
  
      return { msg: 'Usuario insertado correctamente', success: true}

    }catch(e){
        return {msg: "Error al insertar usuario",success: false,smsDetail: e.msg}
    }
}
      
  async updateUser(updateUserDto: UpdateUserRequest) {
    try {
      const user = await this.userRepository.findOne({
        where: { IdUser: updateUserDto.IdUser },
      });
      if (!user) {
        return { msg: 'Usuario no encontrado', success: false };
      }
  
      user.FirstName = updateUserDto.FirstName;
      user.LastName = updateUserDto.LastName;
      user.Password = updateUserDto.Password;
      user.Phone = updateUserDto.Phone;
      user.BirthDate = updateUserDto.BirthDate;
      user.Dni = updateUserDto.Dni;
      user.Address = updateUserDto.Address;
      user.Mail = updateUserDto.Mail;
      user.Rol = updateUserDto.Rol;
  
      await this.userRepository.save(user);
  
      return { msg: 'Usuario actualizado exitosamente', success: true };
    } catch (error) {
      return { msg: 'Error al actualizar usuario', detailMsg: error, success: false };
    }
  }
  
  async getAllUsers() {
    try {
      const users = await this.userRepository.find({where:{Deleted:false}});
      return { data: users, msg: 'Éxito', success: true };
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return { msg: 'Error al obtener usuarios', detailMsg: error, success: false };
    }
  }
  
  async deleteUser(userId: number) {
    try {
      var user=await this.userRepository.findOne({
        where:{IdUser:userId}
      })
      if(!user){
        return { msg: 'No se encontro usuario', success: false, data: null };
      }
      user.Deleted=true;
      await this.userRepository.save(user);
      return { msg: 'Usuario eliminado exitosamente', success: true };
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      return { msg: 'Error al eliminar usuario', detailMsg: error, success: false };
    }
  }
  
  async getUserById(userId: number) {
    try {
      const user = await this.userRepository.findOne({
        where: { IdUser: userId },
      });
      return { data: user, msg: 'Éxito', success: true };
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      return { msg: 'Error al obtener usuario', detailMsg: error, success: false };
    }
  }
  
  async login(userRequest: string, password: string) {
    try {
      let userRes;
      userRes = await this.userRepository.findOne({
        where: { Mail: userRequest, Password: password },
      });
  
      if (!userRes) {
        userRes = await this.userRepository.findOne({
          where: { Dni: userRequest, Password: password },
        });
  
        if (!userRes) {
          return {
            data: null,
            msg: 'Usuario o contraseña incorrectos',
            success: false,
          };
        }
      }
  
      return { data: userRes, msg: 'Éxito', success: true };
    } catch (error) {
      return { msg: 'Error al iniciar sesión', detailMsg: error, success: false };
    }
  }
  
  async getUserByDateRange(request:DateRangeDto){
    try{
      const data = await this.userRepository.query(
          `CALL getUserByDateRange('${request.StartDate}', '${request.EndDate}')`,
        );
        if (data && data.length > 0 && data[0].length > 0) {
          return {
            msg: 'Lista de usuarios completa',
            data: data[0],
            success: true,
          };
        } else {
          return {
            msg: 'La lista de usuarios está vacía',
            data: [],
            success: false,
          };
        }
  }catch(error){
      console.error('Error al recuperar todos los usuarios:', error);
      return {
          msg: 'Error al recuperar todos los usuarios',
          detailMsg: error.message,
          success: false,
    };
  }
  }

  async countUsersCliente() {
    try {
      const result = await this.userRepository.query('SELECT COUNT(*) FROM user WHERE Rol=1');
      const count = result[0]['COUNT(*)'];
      return {
        msg: 'Cantidad de clientes',
        count: count,
        success: true,
      };
    } catch (error) {
      console.error('Error obteniendo la cantidad de clientes:', error);
      return {
        msg: 'Error al recuperar la cantidad de clientes',
        detailMsg: error.message,
        success: false,
  }; 
    }
  }
}
