import { test, expect } from '@playwright/test';

test('GET /api/v1/pets/ returns 200 and a list of pets', async ({ request }) => {
  const response = await request.get('/api/v1/pets/');
  expect(response).toBeOK();

  const body: unknown = await response.json();
  expect(Array.isArray(body)).toBe(true);

  const [first] = body as unknown[];
  if (first !== undefined) {
    expect(first).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      type: expect.any(String),
      age: expect.any(Number),
    });
  }
});
