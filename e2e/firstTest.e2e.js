/* eslint-disable no-undef */
describe('Test SignIn', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('Existe a nome do app e da gesec', async () => {
    await expect(element(by.text('GesecApp'))).toBeVisible();
    await expect(element(by.text('Receitas inusitadas'))).toBeVisible();
  });

  it('Uruário é logado', async () => {
    await element(by.id('email')).tap();
    await element(by.id('email')).typeText('breno@gmail.com');
    await element(by.id('senha')).typeText('123123');

    await element(by.id('logar')).tap();

    await new Promise(r => setTimeout(r, 6000));

    await element(by.text('Nova Receita'));
  });

  it('Uruário adiciona nova receita', async () => {
    await element(by.text('Nova Receita')).tap();
    await element(by.id('name-recipe')).typeText('hamburguer de miojo');
    await element(by.id('url-recipe')).typeText(
      'https://p2.trrsf.com/image/fget/cf/fit-in/648/403/images.terra.com/2014/07/18/17-hamburguer-de-miojoeuaface.jpg',
    );
    await element(by.id('add-recipe')).tap();

    await expect(element(by.text('hamburguer de miojo'))).toBeVisible();
  });

  it('Uruário deleta a nova receita', async () => {
    await expect(element(by.text('hamburguer de miojo'))).toBeVisible();
    await element(by.id('delet-hamburguer')).tap();
  });
});
