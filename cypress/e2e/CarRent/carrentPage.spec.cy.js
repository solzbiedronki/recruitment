class CarRentPage{

    static loadHomePage(){
        cy.visit("http://qalab.pl.tivixlabs.com/")
        cy.url().should("include", "tivixlabs")
    }

    static chooseCountryDropdown(country){
        cy.get("#country").select(country).should("have.value", "1")
    }

    static chooseCityDropdown(city){
        cy.get("#city").select(city).should("have.value", "1")
    }

    static inputCarModel(){
        cy.get("#model").type("Opel")
    }

    static setPickUpDate(){
        const dayjs = require('dayjs')
        cy.log(dayjs().format('DD/MM/YYYY'))
        cy.get('#pickup').click()
        cy.get('#pickup').clear()
        cy.get('#pickup').type(dayjs().format('YYYY-MM-DD'))
    }
    static setinvalidPickUpDate(){
        const dayjs = require('dayjs')
        cy.log(dayjs().format('DD/MM/YYYY'))
        cy.get('#pickup').click()
        cy.get('#pickup').clear()
        cy.get('#pickup').type(dayjs().add(30,"day").format('YYYY-MM-DD'))
    }

    static setDropOffDate(){
        const dayjs = require('dayjs')
        cy.log(dayjs().format('DD/MM/YYYY'))
        cy.get('#dropoff').click()
        cy.get('#dropoff').clear()
        cy.get('#dropoff').type(dayjs().add(30, "day").format('YYYY-MM-DD'))
    }
    static setinvalidDropOffDate(){
        const dayjs = require('dayjs')
        cy.log(dayjs().format('DD/MM/YYYY'))
        cy.get('#dropoff').click()
        cy.get('#dropoff').clear()
        cy.get('#dropoff').type(dayjs().format('YYYY-MM-DD'))
    }


    static clickSearchButton(){
        cy.get('.btn').click()
    }

    static seeSearchResults(){
        cy.get("#search-results").should("be.visible")
    }

    static clickFirstRentButton(){
        cy.get(":nth-child(1) > :nth-child(7) > .btn").click()
    }

    static seeCarRentalDetails(){
        cy.get(".card-header").should("be.visible")
        cy.get(".card-title").should("contain", "Company")
    }

    static seeRentalForm(){
        cy.get("#rent_form").should("be.visible")
    }

    static inputName(name){
        cy.get("#name").type(name)
    }

    static inputLastName(lastName){
        cy.get("#last_name").type(lastName)
    }

    static inputCardNumber(cardNumber){
        cy.get("#card_number").type(cardNumber)
    }

    static inputEmail(email){
        cy.get("#email").type(email)
    }

    static invalidDateErrorMessage(){
        cy.get(".alert").invoke("text").then((text1) =>{
            expect(text1).to.equal("Please enter a valid date!")
        })
    }

}
export default CarRentPage;