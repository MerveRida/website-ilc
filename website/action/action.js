//import blogPosts from './data'

let displayAmount = 5;
$(document).ready(() => {
  console.log(blogPosts);
  for (let i = 0; i < displayAmount; i++) {
    blogPostDisplay(i, blogPosts);
  }
});


function blogPostDisplay(id, blogPosts) {
  let container = $('<div id=blog'+id+' class=blogPost></div>');

  let image = $('<img class=blogImage src='+blogPosts[id].image+'>');

  let text = $('<div id=blog'+id+' class=blogText></div>');
  text.append('<h1>'+blogPosts[id].title+'</h1>');
  text.append('<p>'+blogPosts[id].preview+'</p>');

  let button =  $('<button type="button">Read More</button>');
  button.on('click', ()=> {
    viewBlog(id, blogPosts);
  });

  text.append(button);

  container.append(image);
  container.append(text);

  $('#blog').append(container);
};

function viewBlog(id, blogPosts){
  window.location.href = "./"+blogPosts[id].url;
}