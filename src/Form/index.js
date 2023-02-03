import './style.css'

const Form = ({ mainContent, extraContent, buttons }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            {mainContent}
            {extraContent}
            {buttons}
        </form>
    );
};

export default Form;