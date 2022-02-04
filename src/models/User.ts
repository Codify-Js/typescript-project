export interface User {
  name: string
  age: number | string | null
  emails?: string[]
  status: Status
}

export enum Status {
  confirmed = "CONFIRMED",
  unconfirmed = "UNCONFIRMED"
}
