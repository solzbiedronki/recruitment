/// <reference types="cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import CarRentPage from "./carrentPage.spec.cy";
import dayjs from 'dayjs';

Given("User opens cars search page", function() {
   CarRentPage.loadHomePage()
    });

When("User choose country {string}", country=> {
    CarRentPage.chooseCountryDropdown(country)
    });

When("User choose city {string}", city=> {
    CarRentPage.chooseCityDropdown(city)
})

When("User enters car model", ()=> {
    CarRentPage.inputCarModel()
})

When("User choose valid pick-up date", ()=> {
    CarRentPage.setPickUpDate()
})

When("User choose valid drop-off date", ()=> {
    CarRentPage.setDropOffDate()
})

When("User clicks search button", ()=> {
    CarRentPage.clickSearchButton()
})

Then("User can see list of available cars", ()=> {
    CarRentPage.seeSearchResults()
})

Then("User clicks on rent button of a first available car", ()=> {
    CarRentPage.clickFirstRentButton()
})

When("User can see car details", ()=> {
    CarRentPage.seeCarRentalDetails()
})

When("User clicks rent button", ()=> {
    CarRentPage.clickSearchButton()
})

Then("User is presented with renatl form", ()=> {
    CarRentPage.seeRentalForm()
})

Then("User enters name {string}", name => {
    CarRentPage.inputName(name)
})
Then("User enters last name {string}", lastName => {
    CarRentPage.inputLastName(lastName)
})
Then("User enters card number {string}", cardNumber => {
    CarRentPage.inputCardNumber(cardNumber)
})
Then("User enters email {string}", email => {
    CarRentPage.inputEmail(email)
})

When ("User choose invalid pick-up date", ()=> {
    CarRentPage.setinvalidPickUpDate()
})

When ("User choose invalid drop-off date", ()=> {
    CarRentPage.setinvalidDropOffDate()
})

Then("User can see invalid date error message", ()=>{
    CarRentPage.invalidDateErrorMessage()
})