import React from 'react'

class CreateForm extends React.Component {

    state = {
        name: "",
        img: "",
        favorite: false,
        num_of_clicks: 0
    }

    changeHandler = (e) => {
        console.log("changing", e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({ name: "", img: "", ...this.state })
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" placeholder="image" name="img" value={this.state.img} onChange={this.changeHandler} />
                <input type="submit" value="create gif" />
            </form>
        )
    }



}

export default CreateForm