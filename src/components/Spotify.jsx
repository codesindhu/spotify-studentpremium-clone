import React from 'react'
import './style.css'
const Spotify = () => {
  return (
     <main id='nav'>
        <nav id='sub-nav'>
            <span>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 823.46 225.25">
                <g fill-rule="evenodd" class="svelte-1gcdbl9"><path d="m125.52,3.31C65.14.91,14.26,47.91,11.86,108.29c-2.4,60.38,44.61,111.26,104.98,113.66,60.38,2.4,111.26-44.6,113.66-104.98C232.89,56.59,185.89,5.7,125.52,3.31Zm46.18,160.28c-1.36,2.4-4.01,3.6-6.59,3.24-.79-.11-1.58-.37-2.32-.79-14.46-8.23-30.22-13.59-46.84-15.93-16.62-2.34-33.25-1.53-49.42,2.4-3.51.85-7.04-1.3-7.89-4.81-.85-3.51,1.3-7.04,4.81-7.89,17.78-4.32,36.06-5.21,54.32-2.64,18.26,2.57,35.58,8.46,51.49,17.51,3.13,1.79,4.23,5.77,2.45,8.91Zm14.38-28.72c-2.23,4.12-7.39,5.66-11.51,3.43-16.92-9.15-35.24-15.16-54.45-17.86-19.21-2.7-38.47-1.97-57.26,2.16-1.02.22-2.03.26-3.01.12-3.41-.48-6.33-3.02-7.11-6.59-1.01-4.58,1.89-9.11,6.47-10.12,20.77-4.57,42.06-5.38,63.28-2.4,21.21,2.98,41.46,9.62,60.16,19.74,4.13,2.23,5.66,7.38,3.43,11.51Zm15.94-32.38c-2.1,4.04-6.47,6.13-10.73,5.53-1.15-.16-2.28-.52-3.37-1.08-19.7-10.25-40.92-17.02-63.07-20.13-22.15-3.11-44.42-2.45-66.18,1.97-5.66,1.15-11.17-2.51-12.32-8.16-1.15-5.66,2.51-11.17,8.16-12.32,24.1-4.89,48.74-5.62,73.25-2.18,24.51,3.44,47.99,10.94,69.81,22.29,5.12,2.66,7.11,8.97,4.45,14.09Z"></path><path d="m318.54,169.81c-18.87,0-35.07-6.53-41.84-13.95-.64-.73-.73-1.13-.73-2.02v-22.09c0-1.05.89-1.45,1.61-.56,8.14,10.16,25.48,18.46,39.67,18.46,11.29,0,18.87-3.06,18.87-13.06,0-5.97-2.82-9.84-18.22-14.19l-8.87-2.5c-20.56-5.8-33.06-12.66-33.06-32.33,0-17.41,16.12-32.73,43.05-32.73,13.22,0,26.36,4.11,33.94,9.76.64.48.89.97.89,1.85v20.08c0,1.37-1.13,1.77-2.18.89-6.13-5.08-17.98-11.93-32.01-11.93s-20.64,6.29-20.64,12.09c0,6.13,4.27,7.82,19.51,12.34l7.58,2.26c23.46,7.01,33.06,16.85,33.06,33.14,0,20.96-17.41,34.51-40.63,34.51Zm164.39-42.09c0-12.82,8.87-22.33,21.37-22.33s21.28,9.51,21.28,22.33-8.87,22.33-21.28,22.33-21.37-9.51-21.37-22.33Zm21.28,42.09c26.04,0,44.18-18.62,44.18-42.09s-18.14-42.09-44.18-42.09-44.1,18.46-44.1,42.09,17.98,42.09,44.1,42.09Zm157.22-89.01v6.77h-13.71c-.73,0-1.13.4-1.13,1.13v16.12c0,.73.4,1.13,1.13,1.13h13.71v60.79c0,.73.4,1.13,1.13,1.13h20.64c.73,0,1.13-.4,1.13-1.13v-60.79h17.66l25.64,55.71-13.79,30.31c-.4.89.08,1.29.89,1.29h22.01c.73,0,1.05-.16,1.37-.89l45.55-103.52c.32-.73-.08-1.29-.89-1.29h-20.64c-.73,0-1.05.16-1.37.89l-20.8,49.99-20.88-49.99c-.32-.73-.64-.89-1.37-.89h-33.38v-5.32c0-8.71,5.89-12.74,13.46-12.74,4.51,0,9.43,2.34,12.9,4.43.81.48,1.37-.08,1.05-.81l-7.26-17.33c-.24-.56-.56-.89-1.13-1.21-3.55-1.85-9.35-3.47-15-3.47-17.09,0-26.93,13.06-26.93,29.67Zm-243,88.52c20.64,0,35.47-17.82,35.47-41.76s-15-41.44-35.64-41.44c-15.32,0-24.19,9.35-29.35,18.7v-16.12c0-.73-.4-1.13-1.13-1.13h-20.24c-.73,0-1.13.4-1.13,1.13v103.44c0,.73.4,1.13,1.13,1.13h20.24c.73,0,1.13-.4,1.13-1.13v-41.36c5.16,9.35,13.87,18.54,29.51,18.54Zm172.21-.32c6.77,0,13.3-1.77,17.17-4.03.56-.32.64-.64.64-1.21v-15.32c0-.81-.4-1.05-1.13-.64-2.34,1.29-5.4,2.34-9.59,2.34-6.61,0-10.8-3.87-10.8-12.42v-31.77h20.16c.73,0,1.13-.4,1.13-1.13v-16.12c0-.73-.4-1.13-1.13-1.13h-20.16v-21.04c0-.89-.56-1.37-1.37-.73l-36.04,28.38c-.48.4-.64.81-.64,1.45v9.19c0,.73.4,1.13,1.13,1.13h14.03v35.15c0,19.03,10.96,27.9,26.61,27.9Zm23.3-105.29c0,7.26,5.64,12.74,13.38,12.74s13.54-5.48,13.54-12.74-5.64-12.74-13.54-12.74-13.38,5.48-13.38,12.74Zm3.14,104.17h20.64c.73,0,1.13-.4,1.13-1.13v-78.04c0-.73-.4-1.13-1.13-1.13h-20.64c-.73,0-1.13.4-1.13,1.13v78.04c0,.73.4,1.13,1.13,1.13Zm-228.65-40.47c3.71-12.42,12.25-21.93,23.86-21.93s18.7,8.38,18.7,22.09-7.66,22.25-18.7,22.25-20.16-10.64-23.86-22.41Z"></path><path d="m810.1,92.31c-1.06-1.83-2.53-3.26-4.41-4.3-1.88-1.03-3.98-1.55-6.32-1.55s-4.44.52-6.32,1.55c-1.88,1.04-3.35,2.47-4.41,4.3-1.06,1.83-1.59,3.9-1.59,6.21s.53,4.34,1.59,6.17c1.06,1.83,2.53,3.26,4.41,4.3,1.88,1.04,3.98,1.55,6.32,1.55s4.44-.52,6.32-1.55,3.35-2.47,4.41-4.3c1.06-1.83,1.59-3.88,1.59-6.17s-.53-4.38-1.59-6.21Zm-1.93,11.36c-.86,1.52-2.06,2.7-3.59,3.56-1.53.85-3.27,1.28-5.2,1.28s-3.72-.43-5.25-1.28c-1.53-.85-2.72-2.04-3.57-3.56-.85-1.51-1.27-3.23-1.27-5.15s.42-3.63,1.27-5.13c.85-1.5,2.04-2.68,3.57-3.53,1.53-.85,3.28-1.28,5.25-1.28s3.67.43,5.2,1.28c1.53.85,2.73,2.04,3.59,3.56.86,1.52,1.29,3.23,1.29,5.15s-.43,3.59-1.29,5.11Z"></path><path d="m803.56,98.29c.82-.6,1.23-1.4,1.23-2.39s-.4-1.83-1.2-2.43c-.8-.6-1.96-.9-3.48-.9h-5.36v11.2h2.59v-4.45h1.41l3.41,4.45h3.18l-3.73-4.72c.79-.15,1.46-.4,1.96-.77Zm-3.86-.99h-2.36v-2.74h2.45c.73,0,1.29.11,1.68.34.39.23.59.58.59,1.06,0,.45-.21.79-.61,1.01-.41.23-.99.34-1.75.34Z"></path></g>
                </svg>
            </span>
  <ol>
    <li class="premium-dropdown">
      <a href="#">Premium</a>
      <div id="premiumMenu" class="mh-dropdown-menu">
        <ul>
          <li class="plan">
            <a href="https://www.spotify.com/in-en/premium/?ref=spotifycom_header_premium_individual" data-ga-category="menu" data-ga-action="premium-individual">
              <span class="plan-title">Premium Individual</span> 
              <span class='plan-subtitle'>1 account - For one person.</span>
            </a> 
          </li>
          <li class="plan">
            <a href="https://www.spotify.com/in-en/duo/?ref=spotifycom_header_premium_duo" data-ga-category="menu" data-ga-action="premium-duo">
              <span class="plan-title">Premium Duo</span> 
              <span class='plan-subtitle'>2 accounts - For couples under one roof.</span>
            </a> 
          </li>
          <li class="plan">
            <a href="https://www.spotify.com/in-en/family/?ref=spotifycom_header_premium_family" data-ga-category="menu" data-ga-action="premium-family">
              <span class="plan-title">Premium Family</span> 
              <span class='plan-subtitle'>6 accounts - For family members under one roof.</span>
            </a> 
          </li>
          <li class="plan">
            <a href="https://www.spotify.com/in-en/student/?ref=spotifycom_header_premium_student" data-ga-category="menu" data-ga-action="premium-student">
              <span class="plan-title">Premium Student</span> 
              <span class='plan-subtitle'>1 account - Discount for eligible students.</span>
            </a> 
          </li>
        </ul>
      </div>
    </li>
    <li><div ><a id='li' href="https://support.spotify.com/in-en/#_gl=1*aibry*_gcl_au*MTQ4MDA4ODU0MC4xNzM5MTE1Mz">Support</a> </div> </li>
    <li><div ><a id='li' href="https://www.spotify.com/in-en/download/windows/" >Download</a> </div> </li>
    <li id='l1'>|</li>
    <li><div ><a id='li1' href="https://www.spotify.com/in-en/signup" >Signup</a> </div> </li>
    <li><div ><a id='li1' href="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fwww.spotify.com%2Fin-en%2Fstudent%2F&_locale=en-IN">Login</a> </div> </li>
  </ol>
        </nav>
        <section id='main'>
              <h1>₹59.00 for 2 months of Premium Student</h1>
              <h2>Only ₹59.00/month after. Cancel anytime.</h2>
              <button>get premium</button>
              <p>
              Offer available only to students at an accredited higher education institution. Offer not available to users who already tried <br /> Premium. Spotify Student Discount Offer <a href="#">Terms and conditions</a> apply.
              </p>
        </section>
        <section id='main1'>
            <h1>Soundtrack your study</h1>
            <div id='sub-main'>
                <div className="demo">
                  <img src="https://i.scdn.co/image/ab671c3d0000f43005a36f4846dec6dd07cb8f16" alt="" />
                  <p>Ad-free music listening</p>
                  <p>Study til sunset. Dance til dawn.</p>
                </div>
                <div className="demo">
                  <img src='https://i.scdn.co/image/ab671c3d0000f430e400ba62f90419741db228a6'></img>
                  <p>Listen offline</p>
                  <p>Never worry about data again, wherever you are.</p>
                </div>
                <div className="demo">
                < img src='https://i.scdn.co/image/ab671c3d0000f4304e19b1ec17b710906741e099'></img>
                  <p>Music for every moment</p>
                  <p>Millions of songs, amazing playlists.</p>
                </div>
                <div className="demo">
                <img src='https://i.scdn.co/image/ab671c3d0000f4302fcaf27c28ba9ca60d638328'></img>
                  <p>Easy on the ears</p>
                  <p>Premium packs even more sound quality into every song.</p>
                </div>
            </div>
        </section>
        <div id='main2'>
          <h1>Questions?</h1>
          <h2>We’ve got answers</h2>
          <div id="sub-main2">
            <article className="faq-article">
              <ul className="faq-list">
                <li className="faq-item">
                  <details className="faq-details">
                    <summary className="faq-summary">
                      <div className="faq-question">Am I eligible for this plan?</div>
                        <svg className="faq-icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z" />
                        </svg>
                    </summary>
                    <p className="faq-answer">
                    If you are a student enrolled at an accredited college or university, and above the age of 18, then yes. You can get Premium Student for up to 4 years.
                    </p>
                  </details>
                </li>
                <li className="faq-item">
                  <details className="faq-details">
                    <summary className="faq-summary">
                      <div className="faq-question">How do you verify that I’m a student?</div>
                        <svg className="faq-icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z" />
                        </svg>
                    </summary>
                    <p className="faq-answer">
                    We verify your enrollment status through a third-party service called SheerID. <a href="https://www.sheerid.com/spotify-student-support/?_ga=2.131893512.646964174.1621845310-656588082.1612359808" className="faq-link">Learn more</a>.
                    </p>
                  </details>
                </li>
                <li className="faq-item">
                  <details className="faq-details">
                    <summary className="faq-summary">
                      <div className="faq-question">What happens to my account when I graduate or leave school?</div>
                        <svg className="faq-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z" />
                        </svg>
                    </summary>
                    <p className="faq-answer">
                    You’ll continue to get access to Premium Student, for up to 12 months from the date you subscribed or last re-verified, while it’s available. If you’re no longer a student at the end of that period, you’ll no longer be eligible for Premium Student. Your subscription will then automatically switch to a Premium Individual plan at ₹119.00/month.
                     </p>
                  </details>
                </li>
                <li className="faq-item">
                  <details className="faq-details">
                    <summary className="faq-summary">
                      <div className="faq-question">What will I be charged and when?</div>
                        <svg className="faq-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z" />
                         </svg>
                    </summary>
                    <p className="faq-answer">
                    You will be charged ₹59.00/month. If the price changes in the future, we’ll notify you first. You can cancel anytime on your Spotify Account page.
                    </p>
                  </details>
                 </li>
               </ul>
              </article>
            </div>
          </div>
          <section id='main3'>
              <h1>₹59.00 for 2 months of Premium Student</h1>
              <h2>Only ₹59.00/month after. Cancel anytime.</h2>
              <button>get premium</button>
              <p>
              Offer available only to students at an accredited higher education institution. Offer not available to users who already tried <br /> Premium. Spotify Student Discount Offer <a href="#">Terms and conditions</a> apply.
              </p>
        </section>
        <div id='ftr'>
          <footer >
            <nav id='footer'>
              <div id='f1'>
                <div id='spotify'>
                  <a href="https://www.spotify.com/in-en/" ><span><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 823.46 225.25"><g fill-rule="evenodd" class="svelte-1gcdbl9"><path d="m125.52,3.31C65.14.91,14.26,47.91,11.86,108.29c-2.4,60.38,44.61,111.26,104.98,113.66,60.38,2.4,111.26-44.6,113.66-104.98C232.89,56.59,185.89,5.7,125.52,3.31Zm46.18,160.28c-1.36,2.4-4.01,3.6-6.59,3.24-.79-.11-1.58-.37-2.32-.79-14.46-8.23-30.22-13.59-46.84-15.93-16.62-2.34-33.25-1.53-49.42,2.4-3.51.85-7.04-1.3-7.89-4.81-.85-3.51,1.3-7.04,4.81-7.89,17.78-4.32,36.06-5.21,54.32-2.64,18.26,2.57,35.58,8.46,51.49,17.51,3.13,1.79,4.23,5.77,2.45,8.91Zm14.38-28.72c-2.23,4.12-7.39,5.66-11.51,3.43-16.92-9.15-35.24-15.16-54.45-17.86-19.21-2.7-38.47-1.97-57.26,2.16-1.02.22-2.03.26-3.01.12-3.41-.48-6.33-3.02-7.11-6.59-1.01-4.58,1.89-9.11,6.47-10.12,20.77-4.57,42.06-5.38,63.28-2.4,21.21,2.98,41.46,9.62,60.16,19.74,4.13,2.23,5.66,7.38,3.43,11.51Zm15.94-32.38c-2.1,4.04-6.47,6.13-10.73,5.53-1.15-.16-2.28-.52-3.37-1.08-19.7-10.25-40.92-17.02-63.07-20.13-22.15-3.11-44.42-2.45-66.18,1.97-5.66,1.15-11.17-2.51-12.32-8.16-1.15-5.66,2.51-11.17,8.16-12.32,24.1-4.89,48.74-5.62,73.25-2.18,24.51,3.44,47.99,10.94,69.81,22.29,5.12,2.66,7.11,8.97,4.45,14.09Z"></path><path d="m318.54,169.81c-18.87,0-35.07-6.53-41.84-13.95-.64-.73-.73-1.13-.73-2.02v-22.09c0-1.05.89-1.45,1.61-.56,8.14,10.16,25.48,18.46,39.67,18.46,11.29,0,18.87-3.06,18.87-13.06,0-5.97-2.82-9.84-18.22-14.19l-8.87-2.5c-20.56-5.8-33.06-12.66-33.06-32.33,0-17.41,16.12-32.73,43.05-32.73,13.22,0,26.36,4.11,33.94,9.76.64.48.89.97.89,1.85v20.08c0,1.37-1.13,1.77-2.18.89-6.13-5.08-17.98-11.93-32.01-11.93s-20.64,6.29-20.64,12.09c0,6.13,4.27,7.82,19.51,12.34l7.58,2.26c23.46,7.01,33.06,16.85,33.06,33.14,0,20.96-17.41,34.51-40.63,34.51Zm164.39-42.09c0-12.82,8.87-22.33,21.37-22.33s21.28,9.51,21.28,22.33-8.87,22.33-21.28,22.33-21.37-9.51-21.37-22.33Zm21.28,42.09c26.04,0,44.18-18.62,44.18-42.09s-18.14-42.09-44.18-42.09-44.1,18.46-44.1,42.09,17.98,42.09,44.1,42.09Zm157.22-89.01v6.77h-13.71c-.73,0-1.13.4-1.13,1.13v16.12c0,.73.4,1.13,1.13,1.13h13.71v60.79c0,.73.4,1.13,1.13,1.13h20.64c.73,0,1.13-.4,1.13-1.13v-60.79h17.66l25.64,55.71-13.79,30.31c-.4.89.08,1.29.89,1.29h22.01c.73,0,1.05-.16,1.37-.89l45.55-103.52c.32-.73-.08-1.29-.89-1.29h-20.64c-.73,0-1.05.16-1.37.89l-20.8,49.99-20.88-49.99c-.32-.73-.64-.89-1.37-.89h-33.38v-5.32c0-8.71,5.89-12.74,13.46-12.74,4.51,0,9.43,2.34,12.9,4.43.81.48,1.37-.08,1.05-.81l-7.26-17.33c-.24-.56-.56-.89-1.13-1.21-3.55-1.85-9.35-3.47-15-3.47-17.09,0-26.93,13.06-26.93,29.67Zm-243,88.52c20.64,0,35.47-17.82,35.47-41.76s-15-41.44-35.64-41.44c-15.32,0-24.19,9.35-29.35,18.7v-16.12c0-.73-.4-1.13-1.13-1.13h-20.24c-.73,0-1.13.4-1.13,1.13v103.44c0,.73.4,1.13,1.13,1.13h20.24c.73,0,1.13-.4,1.13-1.13v-41.36c5.16,9.35,13.87,18.54,29.51,18.54Zm172.21-.32c6.77,0,13.3-1.77,17.17-4.03.56-.32.64-.64.64-1.21v-15.32c0-.81-.4-1.05-1.13-.64-2.34,1.29-5.4,2.34-9.59,2.34-6.61,0-10.8-3.87-10.8-12.42v-31.77h20.16c.73,0,1.13-.4,1.13-1.13v-16.12c0-.73-.4-1.13-1.13-1.13h-20.16v-21.04c0-.89-.56-1.37-1.37-.73l-36.04,28.38c-.48.4-.64.81-.64,1.45v9.19c0,.73.4,1.13,1.13,1.13h14.03v35.15c0,19.03,10.96,27.9,26.61,27.9Zm23.3-105.29c0,7.26,5.64,12.74,13.38,12.74s13.54-5.48,13.54-12.74-5.64-12.74-13.54-12.74-13.38,5.48-13.38,12.74Zm3.14,104.17h20.64c.73,0,1.13-.4,1.13-1.13v-78.04c0-.73-.4-1.13-1.13-1.13h-20.64c-.73,0-1.13.4-1.13,1.13v78.04c0,.73.4,1.13,1.13,1.13Zm-228.65-40.47c3.71-12.42,12.25-21.93,23.86-21.93s18.7,8.38,18.7,22.09-7.66,22.25-18.7,22.25-20.16-10.64-23.86-22.41Z"></path><path d="m810.1,92.31c-1.06-1.83-2.53-3.26-4.41-4.3-1.88-1.03-3.98-1.55-6.32-1.55s-4.44.52-6.32,1.55c-1.88,1.04-3.35,2.47-4.41,4.3-1.06,1.83-1.59,3.9-1.59,6.21s.53,4.34,1.59,6.17c1.06,1.83,2.53,3.26,4.41,4.3,1.88,1.04,3.98,1.55,6.32,1.55s4.44-.52,6.32-1.55,3.35-2.47,4.41-4.3c1.06-1.83,1.59-3.88,1.59-6.17s-.53-4.38-1.59-6.21Zm-1.93,11.36c-.86,1.52-2.06,2.7-3.59,3.56-1.53.85-3.27,1.28-5.2,1.28s-3.72-.43-5.25-1.28c-1.53-.85-2.72-2.04-3.57-3.56-.85-1.51-1.27-3.23-1.27-5.15s.42-3.63,1.27-5.13c.85-1.5,2.04-2.68,3.57-3.53,1.53-.85,3.28-1.28,5.25-1.28s3.67.43,5.2,1.28c1.53.85,2.73,2.04,3.59,3.56.86,1.52,1.29,3.23,1.29,5.15s-.43,3.59-1.29,5.11Z"></path><path d="m803.56,98.29c.82-.6,1.23-1.4,1.23-2.39s-.4-1.83-1.2-2.43c-.8-.6-1.96-.9-3.48-.9h-5.36v11.2h2.59v-4.45h1.41l3.41,4.45h3.18l-3.73-4.72c.79-.15,1.46-.4,1.96-.77Zm-3.86-.99h-2.36v-2.74h2.45c.73,0,1.29.11,1.68.34.39.23.59.58.59,1.06,0,.45-.21.79-.61,1.01-.41.23-.99.34-1.75.34Z"></path></g></svg> Spotify</span></a>
                </div>
                <div id='ul'>
                <ul aria-label="Company"><h2 >Company</h2> 
                  <li><a href="https://www.spotify.com/in-en/about-us/contact/">About</a> </li>
                  <li ><a href="https://www.lifeatspotify.com/">Jobs</a> </li>
                  <li><a href="https://newsroom.spotify.com/" class="mh-footer-primary svelte-6klert">For the Record</a> </li>
                </ul>
                <ul aria-label="Communities"><h2 >Communities</h2> 
                  <li ><a href="https://artists.spotify.com/" >For Artists</a> </li>
                  <li ><a href="https://developer.spotify.com/">Developers</a> </li>
                  <li ><a href="https://ads.spotify.com/">Advertising</a> </li>
                  <li><a href="https://investors.spotify.com/">Investors</a> </li>
                  <li><a href="https://spotifyforvendors.com/">Vendors</a> </li>
                </ul>
                <ul aria-label="Useful links" ><h2 >Useful links</h2>
                  <li ><a href="https://support.spotify.com/" >Support</a> </li>
                  <li><a href="https://open.spotify.com/" >Web Player</a> </li>
                  <li><a href="https://www.spotify.com/in-en/free/">Free Mobile App</a> </li>
                </ul>
                <ul aria-label="Spotify Plans"><h2>Spotify Plans</h2> 
                  <li><a href="https://www.spotify.com/in-en/premium/#ref=spotifycom_footer_premium_individual" >Premium Individual</a> </li>
                  <li><a href="https://www.spotify.com/in-en/duo/#ref=spotifycom_footer_premium_duo" >Premium Duo</a> </li>
                  <li><a href="https://www.spotify.com/in-en/family/#ref=spotifycom_footer_premium_family" >Premium Family</a> </li>
                  <li><a href="https://www.spotify.com/in-en/student/#ref=spotifycom_footer_premium_student">Premium Student</a> </li>
                  <li><a href="https://www.spotify.com/in-en/free/#ref=spotifycom_footer_free" >Spotify Free</a> </li>
                </ul>
                <div id='sm'>
                <ul >
                  <li ><a href="https://instagram.com/spotify" title="Instagram"  ><span role="img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg></span></a> </li>
                  <li ><a href="https://twitter.com/spotify" title="Twitter" ><span role="img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"/></svg></span></a> </li>
                  <li ><a href="https://www.facebook.com/Spotify" title="Facebook" ><span role="img" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg></span></a> </li>
                </ul>
              </div>
                </div>
              
              </div>
              <div id='sm2'>
                <a href="https://www.spotify.com/in-en/select-your-country-region/" ><svg width="12" height="13" viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-184rsfv"><path d="M6 0.624023C8.07255 0.624023 9.90309 1.68041 10.9815 3.28299C10.9819 3.28367 10.9822 3.28403 10.9825 3.28438C11.0029 3.30998 11.0209 3.33677 11.0363 3.36446C11.6453 4.30352 12 5.42315 12 6.62402C12 9.92265 9.32436 12.6079 6.02962 12.624C6.02732 12.6241 6.02495 12.6241 6.02258 12.6241L6 12.624C2.69149 12.624 0 9.93253 0 6.62402C0 3.31571 2.69149 0.624023 6 0.624023ZM6 1.78528C5.80411 1.78528 5.61089 1.79698 5.42102 1.81972C5.39755 1.91375 5.34896 2.0023 5.2765 2.07641L3.75157 3.63714C3.64024 3.75103 3.48978 3.812 3.33616 3.812C3.26752 3.812 3.19848 3.7998 3.1318 3.77483C2.91623 3.69359 2.76891 3.49277 2.75652 3.26265L2.74444 3.04725C1.77228 3.93289 1.16125 5.20844 1.16125 6.62402C1.16125 6.90513 1.18535 7.1807 1.23158 7.44881L2.11909 8.18538C2.12814 8.19266 2.13699 8.20053 2.14564 8.20859L2.91981 8.93437C2.99003 9.00007 3.04274 9.08228 3.07323 9.17374L3.37633 10.0793L3.83343 10.3016H4.86133C5.01514 10.3016 5.16285 10.3625 5.27182 10.4715L6.25621 11.4561C8.80567 11.3224 10.8387 9.20617 10.8387 6.62402C10.8387 5.8726 10.6666 5.16063 10.3596 4.52549L9.45716 5.24616L9.62455 5.6122C9.65956 5.68812 9.67726 5.77053 9.67726 5.85393V6.60784C9.67726 6.78014 9.60075 6.94358 9.46857 7.05393C9.3362 7.16407 9.16154 7.2103 8.99219 7.17902L8.05556 7.00751L8.52643 8.28855C8.58347 8.44354 8.57167 8.61544 8.49417 8.76139L7.67162 10.3097C7.58211 10.4783 7.41628 10.5907 7.22969 10.6136L7.15866 10.6179C6.94387 10.6179 6.74659 10.4991 6.64589 10.3093L6.25231 9.56742C6.24563 9.55444 6.23913 9.54126 6.23323 9.52788L5.91027 8.78833L5.5222 8.25412L4.15443 8.44118C4.0551 8.45475 3.9538 8.44255 3.86057 8.40518L2.68811 7.93765C2.46526 7.84855 2.3201 7.632 2.32244 7.39204L2.33879 5.84783C2.34095 5.65035 2.44304 5.46763 2.61022 5.3624L4.57554 4.12641C4.81058 3.97869 5.11781 4.01783 5.30801 4.22062L5.95905 4.91395L6.7818 5.23062L7.05303 5.13365L5.90181 3.48933C5.77849 3.3131 5.76256 3.08317 5.86051 2.89179L6.41732 1.80311C6.27976 1.7913 6.14057 1.78528 6 1.78528Z" fill="#8F8F8F"></path></svg> India (English)</a>
              </div>
              <div id='ftrl'>
                <ul >
                  <li ><div ><a href="https://www.spotify.com/in-en/legal/" id="">Legal</a> </div> </li>
                  <li ><div ><a href="https://www.spotify.com/in-en/safetyandprivacy/" id="">Safety &amp; Privacy Center</a> </div> </li>
                  <li ><div ><a href="https://www.spotify.com/in-en/legal/privacy-policy/" id="">Privacy Policy</a> </div> </li>
                  <li ><div ><a href="https://www.spotify.com/in-en/legal/cookies-policy/" id="">Cookies</a> </div> </li>
                  <li ><div ><a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3" id="">About Ads</a> </div> </li>
                  <li><div ><a href="https://www.spotify.com/in-en/accessibility/" id="">Accessibility</a> </div> </li>
                </ul>
                <span>© 2025 Spotify AB</span>
              </div>
            </nav>
          </footer>
        </div>
    </main>
  )
}

export default Spotify