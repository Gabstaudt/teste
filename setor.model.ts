export class Setor {
  id: number;
  nome: string;
  endereco: string;
  latitude: number;
  longitude: number;
  unidade: number;
  subunidade: number;
  status: number;
  tipo: number;
  tags: Map<number, Tag> = new Map(); 
  alarmes: Map<number, Alarme> = new Map();
}
