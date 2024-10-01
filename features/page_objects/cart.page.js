import { $ } from '@wdio/globals';

const cartUrl = 'https://www.saucedemo.com/cart.html'

const cartBtn = "//a[@class='shopping_cart_link']";
const yourCart = "//span[@class='title']";
const desc1 = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]";
const desc2 = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/div[1]";
const desc3 = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[2]/div[1]"
const checkoutBtn = "//*[contains(@name,'checkout')]"
const remove = "//button[@id='remove-sauce-labs-backpack']";
const cartItem ="(//div[@class='cart_item'])"


class Cart {

    //Function to navigate to the cart page
    async open () {
        await $(cartBtn).isClickable();
        await $(cartBtn).click();
        await browser.url(cartUrl);
        await browser.pause(1000);
    }

    //Function to verify that the item added to the cart is displayed
    async itemDisplayed() {
        await $(yourCart).isDisplayed();
        await $(desc1).isDisplayed();
        await browser.pause(1000);
    }

    //Function to verify that the items added to the cart are displayed
    async itemsDisplayed() {
        await $(yourCart).isDisplayed();
        await $(desc1).isDisplayed();
        await $(desc2).isDisplayed();
        await $(desc3).isDisplayed();
        await browser.pause(1000);
    }

    //Function to click on checkout button
    async clickBtn() {
        if($(checkoutBtn).isDisplayed({withinViewport: true}) == false) {
            await $(checkoutBtn).scrollIntoView();
            await browser.pause(2000);
        }
        await $(checkoutBtn).isClickable();
        await $(checkoutBtn).click();
        await browser.pause(1000);
    }

    //Function to remove an item from the cart
    async removeItem() {
        await expect($(yourCart)).toBeDisplayed();
        await expect($(cartItem)).toBeDisplayed();
        await browser.pause(1000);
        await $(remove).isClickable();
        await $(remove).click();
        await browser.pause(1000);
    }

    //Function to verify that the removed item no longer exists in the cart
    async verifyRemove() {
        await expect($(remove)).not.toBeDisplayed();
        await browser.pause(1000);
    }
}

export default new Cart();