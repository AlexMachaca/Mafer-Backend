import { CartItem } from "src/Modulos/cart/entity/CartItem.entity";
import { Shipment } from "src/modulos/shipment/entity/ShipmentEntity.entity";

export class ReqSuccessDto {
    Mail: string;
    User: string;
    Items: CartItem[];
    Total: number;
    Methodship: boolean;
    MethodPayment: boolean;
    Shipment: Shipment;
    IdUser: number;
    Idcart: number;
    Image: string;
}