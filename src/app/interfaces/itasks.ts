export interface ITasks {
  id: string,
  title: string,
  description: string,
  status: Status
}

export interface Status {
  type: number,
  title: string
}