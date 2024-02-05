import './NewsletterForm.css';

const NewsletterForm = () => {
  return (
    <form className="NewsletterForm">
      <input type="text" placeholder="Email address"></input>
      <input type="submit" value="Sign up for GitHub"></input>
    </form>
  );
};

export default NewsletterForm;