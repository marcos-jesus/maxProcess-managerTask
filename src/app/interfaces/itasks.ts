export interface ITasks {
  id: string,
  title: string,
  description: string,
  status: Status
}

interface Status {
  type: number,
  title: string
}