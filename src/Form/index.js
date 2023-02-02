import './style.css'

const Form = ({ mainContent, extraContent }) => {
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
        </form>
    );
};

export default Form;