export function fetchMock(data: unknown) {
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(
      jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve(data) }),
      ) as jest.Mock,
    );
}
