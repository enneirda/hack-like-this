const GuestBook = () => {
  return (
    <div>
      <h1> Sign my guest GuestBook </h1>
      <form>
      <input type="text" name="name" required placeholder="Your name" />
      <input type="text" name="message" required placeholder="Your message" />
    </form>
    </div>
  );
};

export default GuestBook;
