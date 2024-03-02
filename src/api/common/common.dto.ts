export type CommonErrorDto<E = string> = {
  message: string;
  detail: E;
};

export type CommonResponseDto<T> = {
  message: string;
  data: T;
  error: CommonErrorDto;
};
