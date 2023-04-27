import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByPlaceholder('tasa').click();
    await page.getByPlaceholder('tasa').press('ArrowLeft');
    await page.getByPlaceholder('tasa').press('ArrowLeft');
    await page.getByPlaceholder('tasa').fill('3,%4');
    await page.getByPlaceholder('monto').click();
    await page.getByPlaceholder('monto').fill('$ 100.0000');
    await page.getByText('Monto aFinanciar:Tasa:Aval: Valor del Crédito: $ 1.000.000$ 117.395 12 cuotas me').click();
    await page.locator('#main div').filter({ hasText: '$ 117.395 12 cuotas mensuales $ 72.704 24 cuotas mensuales $ 58.575 36 cuotas me' }).nth(2).click();
    await page.locator('div').filter({ hasText: 'La cuota incluye seguro de vida deudor y servicio de acompañamiento AgriClub.' }).nth(4).click();
    await page.getByRole('button', { name: 'Settings Simulador' }).click();
    await page.getByPlaceholder('monto').click();
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').fill('$ ');
    await page.getByPlaceholder('tasa').click();
    await page.getByPlaceholder('tasa').fill('3,%0');
    await page.getByPlaceholder('monto').click();
    await page.getByPlaceholder('monto').fill('$ 100.0000');
    await page.getByRole('heading', { name: '$ 114.781' }).click();
    await page.getByPlaceholder('aval').click();
    await page.getByPlaceholder('monto').click();
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').press('ArrowRight');
    await page.getByPlaceholder('monto').fill('$ ');
    await page.getByPlaceholder('aval').click();
    await page.getByPlaceholder('aval').press('ArrowRight');
    await page.getByPlaceholder('aval').fill('');
    await page.getByPlaceholder('aval').press('ArrowLeft');
    await page.getByPlaceholder('aval').fill('1%0');
    await page.getByPlaceholder('monto').click();
    await page.getByPlaceholder('monto').fill('$ 500.0000');
});