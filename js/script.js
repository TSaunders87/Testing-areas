/* check the script is running and say hello */
console.log('App is alive!');

    /* change the channel
    * @param channelName which is preset text */
function switchChannel(channelName){
    // log the channel change
    console.log('Tuning into channel ' + channelName);
    
    // write the new name to the right app bar
    document.getElementById('channel-name').innerHTML = channelName;

    // change the channel location
    document.getElementById('channel-location').innerHTML = '&nbspby <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';

    // change the star from filled to empty
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');

    // try a new way to select the channels. This is filtering for the correct information.
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

    /* change the star from empty to filled when favorited
    */
function favorite(){
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

    /* selecting the tabs
    * @param tabId which is preset text */
function selectTab(tabId){
    // remove the selection highlighting
    $('#tab-bar button').removeClass('selected');

    // log the tab change
    console.log('Changing to tab ' + tabId);
    
    // highlight the clicked on button
    $(tabId).addClass('selected');
}

    /* emoji box toggle
    */
function emojis(){
    $('#emojis').toggle();
}