const params = new URLSearchParams(window.location.search)
const id = params.get("yt")!=null?params.get('yt'):"Ca3kPemW2CE";
const youtubeLink = `https://www.youtube.com/embed/${id}`
const mainDiv = document.getElementById("mainDiv")
mainDiv.innerHTML = `<iframe  style="height: 100vh; width: 100%;" id="video"
src="${youtubeLink}" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>`