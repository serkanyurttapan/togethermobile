
export namespace Base{
  export class BaseResponse<TEntity> {
  extra: TEntity;
  success: boolean;
  errorMessage: string;
}
}
