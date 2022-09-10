export interface Bird {
  id?:               string;
  nombre:            string;
  nombre_cientifico: string;
  descripcion:       string;
  alimentacion:        string;
  alt_img?:          string; ///https://dflljfldlfjfds
  familia?:          Familia; 
}



export enum Familia{
  corvidae = "Corvidae",
  paridae = "Paridae",
  falconidae = "Falconidae",
  estrildidae = "Estrildidae"
}