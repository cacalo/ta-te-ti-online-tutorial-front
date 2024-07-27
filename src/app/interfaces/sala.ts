import { Jugador } from "./jugador";

export type EstadoJuego = "ESPERANDO_COMPAÑERO" |
"TURNO_P1" |
"TURNO_P2" |
"VICTORIA_P1" |
"VICTORIA_P2" |
"EMPATE" |
"ABANDONADO" |
"VICTORIA_FINAL_P1" |
"VICTORIA_FINAL_P2";

export interface SalaBackend {
  publica : boolean,
  jugadores : [Jugador,Jugador],
  id : number
  estado: EstadoJuego,
  tablero:Tablero
  posicionGanadora: PosicionGanadora | undefined
}

export type PosicionTablero = 0|1|2|3|4|5|6|7|8;
export type Tablero = [NumeroJugador|"",NumeroJugador|"",NumeroJugador|"",NumeroJugador|"",NumeroJugador|"",NumeroJugador|"",NumeroJugador|"",NumeroJugador|"",NumeroJugador|""];
export type NumeroJugador = 1|2;
export type PosicionGanadora = [PosicionTablero,PosicionTablero,PosicionTablero];