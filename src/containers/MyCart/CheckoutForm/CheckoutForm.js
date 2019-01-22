import React, { Component } from 'react'
import Input from './../../../components/UI/Input/Input'
import classes from './CheckoutForm.module.scss'
import { connect } from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import * as actionTypes from './../../../store/actions'

class CheckoutForm extends Component {
  state = {
    formIsValid: false,
    orderForm: {
      name: {
        label: 'Name',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: ''
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      phoneNo: {
        label: 'Phone No.',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: ''
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        label: 'Email',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: ''
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      address: {
        label: 'Postal Address',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: ''
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    }
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }

    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    )
    updatedFormElement.touched = true
    updatedOrderForm[inputIdentifier] = updatedFormElement

    let formIsValid = true
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid })
  }

  checkValidity(value, rules) {
    let isValid = true
    if (!rules) return true
    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }
    return isValid
  }

  completeCheckout = () => {
    this.props.emptyCart()
  }

  render() {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    return (
      <form onSubmit={this.orderHandler} className={classes.CheckoutForm}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => {
              this.inputChangedHandler(event, formElement.id)
            }}
          />
        ))}
        <div className={classes.checkoutBtn}>
          <Button
            text="Checkout"
            icon={faShoppingCart}
            disabled={!this.state.formIsValid}
            clicked={this.completeCheckout}
          />
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch({ type: actionTypes.EMPTY_CART })
})

export default connect(
  null,
  mapDispatchToProps
)(CheckoutForm)
