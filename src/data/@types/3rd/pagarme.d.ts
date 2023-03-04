declare module 'pagarme' {
  export default Pagarme;

  export interface CardInterface{
    card_number: string
    card_holder_name: string
    card_expiration_date: String
    card_cvv: string
  }
  export interface CardValidateInterface {
    card_number: boolean;
    card_holder_name: boolean;
    card_expiration_date: boolean;
    card_cvv: boolean;
    brand: string;
  }
}
declare const Pagarme: PagarmeIterface;

interface PagarmeIterface {
  validate: ({ card: CardInterface }) => { card: CardValidateInterface };
}


