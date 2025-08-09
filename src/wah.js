import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function SubscribeForm() {
  const url = "https://gmail.us17.list-manage.com/subscribe/post?u=8c63f11b3cf4a747fb7d8ddc2&amp;id=6f8497c4fc";
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <input
          id="EMAIL"
          autoFocus
          type="email"
          value={fields.EMAIL}
          onChange={handleFieldChange}
          placeholder="Enter your email"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {loading && <p>Submitting...</p>}
      {error && <p className="error">{message}</p>}
      {success && <p className="success">{message}</p>}
    </div>
  );
}