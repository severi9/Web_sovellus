Web site url: https://severi9.github.io/Web_sovellus/

HTML: 
Home page has links to media and form:
<!--<a id="back" href="index.html">homepage</a>
<a href="imgs.html" class="image-box">
  <img src="imgs/image4.jpg" alt="Image Gallery">
  <span>Image Gallery</span>
</a> -->

CSS: 
Is mostly done in the styles.css file, front page image boxes css:
 <!--.image-box {
  display: inline-block;
  width: 200px; 
  text-align: center;
  background-color: #e0e0e0;
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  color: #333; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}-->

JavaScript and Asynchronous Operations: 
Button with onclick effect with event listener and timer:
document.getElementById("alertButton").addEventListener("click", function() {
  const timerElement = document.getElementById("timer");
  let countdown = 5;

  // Display the timer
  timerElement.style.display = "block";
  timerElement.textContent = countdown;

  // Start a countdown
  const interval = setInterval(function() {
    countdown--;
    timerElement.textContent = countdown; // Update timer text

    if (countdown <= 0) {
        clearInterval(interval); // Stop the countdown
        timerElement.style.display = "none"; // Hide the timer
        alert("Alert!"); 
    }
}, 1000); // Interval of 1 second
});

asynchronous call: this code gets username sends it to server and when it responses it displayes the data
it has also error handling

<div id="asnyc_content">
        <h1>Send Data via POST Request</h1>
        <form id="postForm">
            <input type="text" id="username" placeholder="Enter your name">
            <button type="submit">Submit</button>
        </form>
        <p id="responseMessage" style="font-size: 25px;"></p>
    </div>
    <script>
        document.getElementById('postForm').addEventListener('submit', async function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json' 
                    }, body: JSON.stringify({ username: username }) 
                });
                const data = await response.json();
                document.getElementById('responseMessage').textContent = `User "${data.username}" added successfully with ID: ${data.id}`;
            } catch (error) {
                console.error('Error posting data:', error);
                document.getElementById('responseMessage').textContent = 'Failed to send data.';
            }
        });
    </script>


