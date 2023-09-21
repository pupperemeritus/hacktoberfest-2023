'use client';
import React from "react";



class Form extends React.Component {
    static async getInitialProps(ctx) {
        ctx.res.setHeader('Content-type', 'text/html');
        ctx.res.write(str);
        ctx.res.end();
    }
    render() {
        return (
            <div>
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSepwkYVpD9rWy5Ym2LnvZipnlQlZH5YPbL-M6J0M6uAg9K2BA/formResponse"
                    target="_self"
                    id="bootstrapForm"
                    method="POST">
                    <div id="section-1">
                        <fieldset>
                            <h2>CBIT Hacktoberfest Hackathon 2023<br /><small>Greetings Open-Source Enthusiasts!
                                It&#x27;s that time of the year again, the much awaited CBIT Hacktoberfest Hackathon is just around the corner. With a tremendous turnout of 98 teams and 516 participants, Hacktoberfest is still going strong and we intend to keep it that way! This years edition of COSC&#x27;s flagship event is similar to its predecessors and fosters a community and celebrates open source. Hacktoberfest stands as the premier virtual celebration within the Open Source Community, offering a dynamic platform to sharpen your technical prowess and spotlight your talents through meaningful contributions to the open-source world.
                                This is your chance to make a mark on the open-source realm!
                                Here are some essential rules and guidelines to keep in mind:
                                Every team will consist of 3 to 5 members and individual or paired participants will be pooled together
                                In the spirit of open source, there will be no Registration Fees
                                Problem Statements will be released on the day of the Hackathon.
                                The hackathon is inclusive and welcomes students from all academic disciplines, all years of study, and any college or university.
                                Mode: Virtual (on Discord)
                                Registration Deadline: 4th October, 11:00 PM
                                Hackathon Date and Timings: 7th October, 4:00 PM to 8th October, 7:30 PM
                                Stay tuned for additional information that will be relayed through your Team Leader. Please keep an eye on your registered email addresses for upcoming announcements. And most importantly, may the source be with you!
                                Also, stay connected and stay informed by following our Instagram handle for future updates.
                                For any queries, contact:
                                Akil: 9442621187
                            </small></h2>
                        </fieldset>
                        <fieldset>
                            <legend for="">Email</legend>
                            <div class="form-group">
                                <input id="emailAddress" type="email" name="emailAddress" class="form-control" required />
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="589548866">Team Name</legend>
                            <div class="form-group">
                                <input id="2063582306" type="text" name="entry.2063582306" class="form-control" required />
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="115335284">Team Size</legend>
                            <div class="form-group">
                                <p class="help-block">Individual participants and teams comprising of two members will be pooled with other participants
                                    Further details will be communicated to the Team Lead and the specified email</p>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="entry.1110453834" value="1" required />
                                        1
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="entry.1110453834" value="2" required />
                                        2
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="entry.1110453834" value="3" required />
                                        3
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="entry.1110453834" value="4" required />
                                        4
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="entry.1110453834" value="5" required />
                                        5
                                    </label>
                                </div>
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="2019641531">What technical skills and frameworks are you and your team members familiar with?</legend>
                            <div class="form-group">
                                <textarea id="1651657008" name="entry.1651657008" class="form-control" required></textarea>
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="1885957116">Team Leader Name</legend>
                            <div class="form-group">
                                <input id="445699137" type="text" name="entry.445699137" class="form-control" required />
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="1476785257">Team Leader Email ID</legend>
                            <div class="form-group">
                                <input id="1814031188" type="text" name="entry.1814031188" class="form-control" required />
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="811144166">Team Leader Contact Number</legend>
                            <div class="form-group">
                                <input id="580637188" type="text" name="entry.580637188" class="form-control" required />
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="296546576">Roll Number</legend>
                            <div class="form-group">
                                <input id="1494484691" type="text" name="entry.1494484691" class="form-control" required />
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="30119366">College Name</legend>
                            <div class="form-group">
                                <input id="1644823420" type="text" name="entry.1644823420" class="form-control" required />
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="620465286">Year of Study</legend>
                            <div class="form-group">
                                <select id="620465286" name="entry.108615760" class="form-control">
                                    <option value="First Year">First Year</option>
                                    <option value="Second Year">Second Year</option>
                                    <option value="Third Year">Third Year</option>
                                    <option value="Fourth Year">Fourth Year</option>
                                </select>
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="1672735296">Branch</legend>
                            <div class="form-group">
                                <select id="1672735296" name="entry.1563983552" class="form-control">
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AI &amp; ML">CSE AI &amp; ML</option>
                                    <option value="CET">CET</option>
                                    <option value="IT">IT</option>
                                    <option value="AIDS">AIDS</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CHEMICAL">CHEMICAL</option>
                                    <option value="BIOTECH">BIOTECH</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="1743077529">Section</legend>
                            <div class="form-group">
                                <select id="1743077529" name="entry.1958219572" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </fieldset>

                    </div>
                    <div id="section-2">
                        {/*  */}
                        <fieldset>
                            <legend for="1998221997">Team Member Details</legend>
                            <div class="form-group">
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="88520221">Name</legend>
                            <div class="form-group">
                                <input id="614815331" type="text" name="entry.614815331" class="form-control" required />
                            </div>
                        </fieldset>


                        {/*  */}
                        <fieldset>
                            <legend for="1049216781">Roll Number</legend>
                            <div class="form-group">
                                <input id="592584203" type="text" name="entry.592584203" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1147559039">College Name</legend>
                            <div class="form-group">
                                <input id="257862837" type="text" name="entry.257862837" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="596154546">Year</legend>
                            <div class="form-group">
                                <select id="596154546" name="entry.467655292" class="form-control">
                                    <option value="First Year">First Year</option>
                                    <option value="Second Year">Second Year</option>
                                    <option value="Third Year">Third Year</option>
                                    <option value="Fourth Year">Fourth Year</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="2093469607">Branch</legend>
                            <div class="form-group">
                                <select id="2093469607" name="entry.113284536" class="form-control">
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AI &amp; ML">CSE AI &amp; ML</option>
                                    <option value="CET">CET</option>
                                    <option value="IT">IT</option>
                                    <option value="AIDS">AIDS</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CHEMICAL">CHEMICAL</option>
                                    <option value="BIOTECH">BIOTECH</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="245507387">Section</legend>
                            <div class="form-group">
                                <select id="245507387" name="entry.639858685" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </fieldset>

                    </div>
                    <div id="section-3">
                        <fieldset>
                            <legend for="297319105">Team Member Details</legend>
                            <div class="form-group">
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="934191790">Name</legend>
                            <div class="form-group">
                                <input id="1193142679" type="text" name="entry.1193142679" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="966119623">Roll Number</legend>
                            <div class="form-group">
                                <input id="1627949356" type="text" name="entry.1627949356" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1289435999">College Name</legend>
                            <div class="form-group">
                                <input id="443034656" type="text" name="entry.443034656" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="219766217">Year</legend>
                            <div class="form-group">
                                <select id="219766217" name="entry.1324061005" class="form-control">
                                    <option value="First Year">First Year</option>
                                    <option value="Second Year">Second Year</option>
                                    <option value="Third Year">Third Year</option>
                                    <option value="Fourth Year">Fourth Year</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="625150825">Branch</legend>
                            <div class="form-group">
                                <select id="625150825" name="entry.1284054994" class="form-control">
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AI &amp; ML">CSE AI &amp; ML</option>
                                    <option value="CET">CET</option>
                                    <option value="IT">IT</option>
                                    <option value="AIDS">AIDS</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CHEMICAL">CHEMICAL</option>
                                    <option value="BIOTECH">BIOTECH</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="291227852">Section</legend>
                            <div class="form-group">
                                <select id="291227852" name="entry.11271393" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </fieldset>
                    </div>

                    <div id="section-4">
                        <fieldset>
                            <legend for="1535613039">Team Member Details</legend>
                            <div class="form-group">
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="839804749">Name</legend>
                            <div class="form-group">
                                <input id="1369366464" type="text" name="entry.1369366464" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1911951528">Roll Number</legend>
                            <div class="form-group">
                                <input id="1399044406" type="text" name="entry.1399044406" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="536772932">College Name</legend>
                            <div class="form-group">
                                <input id="477497822" type="text" name="entry.477497822" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="471078577">Year</legend>
                            <div class="form-group">
                                <select id="471078577" name="entry.962333022" class="form-control">
                                    <option value="First Year">First Year</option>
                                    <option value="Second Year">Second Year</option>
                                    <option value="Third Year">Third Year</option>
                                    <option value="Fourth Year">Fourth Year</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1317916075">Branch</legend>
                            <div class="form-group">
                                <select id="1317916075" name="entry.171849333" class="form-control">
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AI &amp; ML">CSE AI &amp; ML</option>
                                    <option value="CET">CET</option>
                                    <option value="IT">IT</option>
                                    <option value="AIDS">AIDS</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CHEMICAL">CHEMICAL</option>
                                    <option value="BIOTECH">BIOTECH</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1725491973">Section</legend>
                            <div class="form-group">
                                <select id="1725491973" name="entry.2122078574" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </fieldset>
                    </div>

                    <div id="section-5">
                        <fieldset>
                            <legend for="494494688">Team Member Details</legend>
                            <div class="form-group">
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="684711812">Name</legend>
                            <div class="form-group">
                                <input id="1172486922" type="text" name="entry.1172486922" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="49335025">Roll Number</legend>
                            <div class="form-group">
                                <input id="1756258122" type="text" name="entry.1756258122" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="892138441">College Name</legend>
                            <div class="form-group">
                                <input id="1327608088" type="text" name="entry.1327608088" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="650086981">Year</legend>
                            <div class="form-group">
                                <select id="650086981" name="entry.1988676886" class="form-control">
                                    <option value="First Year">First Year</option>
                                    <option value="Second Year">Second Year</option>
                                    <option value="Third Year">Third Year</option>
                                    <option value="Fourth Year">Fourth Year</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1580540328">Branch</legend>
                            <div class="form-group">
                                <select id="1580540328" name="entry.1536308670" class="form-control">
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AI &amp; ML">CSE AI &amp; ML</option>
                                    <option value="CET">CET</option>
                                    <option value="IT">IT</option>
                                    <option value="AIDS">AIDS</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CHEMICAL">CHEMICAL</option>
                                    <option value="BIOTECH">BIOTECH</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend for="1352080404">Section</legend>
                            <div class="form-group">
                                <select id="1352080404" name="entry.1511534131" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </fieldset>
                    </div>


                    <div id="section-6">

                        <fieldset>
                            <legend for="1716255882">Team Member Details</legend>
                            <div class="form-group">
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1570443883">Name</legend>
                            <div class="form-group">
                                <input id="2120853261" type="text" name="entry.2120853261" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="717435800">Roll Number</legend>
                            <div class="form-group">
                                <input id="2011915937" type="text" name="entry.2011915937" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1859382656">College Name</legend>
                            <div class="form-group">
                                <input id="1137456307" type="text" name="entry.1137456307" class="form-control" required />
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1803766961">Year</legend>
                            <div class="form-group">
                                <select id="1803766961" name="entry.232235344" class="form-control">
                                    <option value="First Year">First Year</option>
                                    <option value="Second Year">Second Year</option>
                                    <option value="Third Year">Third Year</option>
                                    <option value="Fourth Year">Fourth Year</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="2092753228">Branch</legend>
                            <div class="form-group">
                                <select id="2092753228" name="entry.1312317868" class="form-control">
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AI &amp; ML">CSE AI &amp; ML</option>
                                    <option value="CET">CET</option>
                                    <option value="IT">IT</option>
                                    <option value="AIDS">AIDS</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="MECHANICAL">MECHANICAL</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CHEMICAL">CHEMICAL</option>
                                    <option value="BIOTECH">BIOTECH</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1047500206">Section</legend>
                            <div class="form-group">
                                <select id="1047500206" name="entry.1679693985" class="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </fieldset>

                    </div>
                    <div id="section-7">
                        <fieldset>
                            <legend for="673550520">Team Member Details</legend>
                            <div class="form-group">
                            </div>
                        </fieldset>



                        <fieldset>
                            <legend for="1085751915">Which of the following tech stacks are you and your teammate (if any) familiar with?</legend>
                            <div class="form-group">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="entry.1744030706" value="Frontend Development" />
                                        Frontend Development
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="entry.1744030706" value="Backend  Development" />
                                        Backend  Development
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="entry.1744030706" value="UI/UX" />
                                        UI/UX
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        Machine Learning and Artificial Intelligence
                                    </label>
                                    <input type="checkbox" name="entry.1744030706" value="Machine Learning and Artificial Intelligence" />
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="entry.1744030706" value="__other_option__" />
                                    </label>
                                    <input type="text" name="entry.1744030706.other_option_response" placeholder="custom value" />
                                </div>
                            </div>
                        </fieldset>

                        <input type="hidden" name="fvv" value="1" />
                        <input type="hidden" name="fbzx" value="7231037383997258336" />
                        {/* <!--
                        CAVEAT: In multipages (multisection) forms, *pageHistory* field tells to google what sections we've currently completed.
                        This usually starts as "0" for the first page, then "0,1" in the second page... up to "0,1,2..N" in n-th page.
                        Keep this in mind if you plan to change this code to recreate any sort of multipage-feature in your exported form.
                        We're setting this to the total number of pages in this form because we're sending all fields from all the section together.
    --> */}
                        <input type="hidden" name="pageHistory" value="0,1,2,3,4,5,6" />

                        <input class="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </div >);
        {/* // This script requires jQuery and jquery-form plugin */ }
        {/* // You can use these ones from Cloudflare CDN: */ }
        { <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous" />; }
        { <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js" integrity="sha256-2Pjr1OlpZMY6qesJM68t2v39t+lMLvxwpa8QlRjJroA=" crossorigin="anonymous" />; }

        {
            $('#bootstrapForm').submit(function (event) {
                event.preventDefault();
                var extraData = {};
                $('#bootstrapForm').ajaxSubmit({
                    data: extraData,
                    dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                    error: function () {
                        // Submit of form should be successful but JSONP callback will fail because Google Forms
                        // does not support it, so this is handled as a failure.
                        alert('Form Submitted. Thanks.');
                        // You can also redirect the user to a custom thank-you page:
                        // window.location = 'http://www.mydomain.com/thankyoupage.html'
                    }
                });

            });
        }
    }
}
{/* // © 2017 Stefano Brilli

            // Fork me on GitHub */}


export default Form;