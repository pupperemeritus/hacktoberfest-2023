import React from 'react';

function Form() {
    return (
        <div>
            <h1>Registration</h1>
            <form method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLScjoJgWSDA47NfaiSdTm3WCZVbKM59Ikan70Zn2-iY43uzF-g/formResponse">
                <label for="name">Name</label>
                <input type="text" id="name" name="entry.2092238618" /><br />

                <label for="none">None</label>
                <input type="radio" id="none" name="entry.588393791" /><br />

                <label for="Vegetarian">Vegetarian</label>
                <input type="radio" id="Vegetarian" name="entry.588393791" /><br />

                <label for="Vegan">Vegan</label>
                <input type="radio" id="Vegan" name="entry.588393791" /><br />

                <label for="Kosher"></label>
                <input type="radio" id="Kosher" name="entry.588393791" /><br />


                <label for="GlutenFree">Gluten Free</label>
                <input type="radio" id="GlutenFree" name="entry.588393791" /><br />

                <label for="Other">Other</label>
                <input type="radio" id="Other" name="entry.588393791" />
                <input type="text" id="text" name="other" /><br />


                <input type="checkbox" name="entry.2109138769" />
                <label for="entry.2109138769">Yes</label><br />

                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}

export default Form;   