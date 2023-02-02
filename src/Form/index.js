import './style.css'

const Form = ({ mainContent, extraContent }) => (
    <form className="form">
        {mainContent}
        {extraContent}
    </form>
);

export default Form;