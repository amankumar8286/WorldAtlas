export const  Contact = () => {

const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
};


    return <header className="">
        <section className="section-contact">
        <h2 className="container-title"></h2>
        <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
            <input type="text" required autoComplete="false"placeholder="Enter your name"name="username" />

            <input type="mail"className="form-control" required autoComplete="false"placeholder="Enter your email" name="email" />
{/* <textarea name="type your message here" id="" required autoComplete="false"></textarea> */}
            <textarea name="message" className="form-control" rows="10"  id="" placeholder="Write here your message in description" required autoComplete="false">Write here your message</textarea>
            <button type="submit" value="send">Send</button>
            
        </form>

        </div>
    </section>
    
    </header>
    
};