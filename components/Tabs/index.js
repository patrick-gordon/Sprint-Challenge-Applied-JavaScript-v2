// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topicContainer = document.querySelector('.topics')
axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then (data => {
    console.log('error')
    console.log(data.data.topics)

    data.data.topics.forEach(topic => {

        function tab(text){
            const tab = document.createElement('div');
            tab.classList.add('tab')

            tab.textContent = text;

            topicContainer.appendChild(tab)
        }
        tab(topic);
    })


})
