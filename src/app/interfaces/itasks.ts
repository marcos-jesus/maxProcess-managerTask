export interface ITasks {
  id?: string,
  title: string | null,
  description: string | null,
  status: Status
}

export interface Status {
  type: string | null,
  label: string
}

export type ITasksWithoutId = Omit<ITasks, "id">