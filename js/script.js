console.log(card)

// masukkan data ke card

card.forEach(function(item){
	$('#card-list').append(
		`<div class="col-md-6 col-lg-4 glry-item gallery-masonry-item col-sm-12 ${item.tag}">
		    <div class="portfolio-item-img">
		        <img style="background: #E7F2F8;" src="img/portfolio/${item.gambar}" alt="Portfolio Img" class="img-fluid portfolio-img">
		        <h5 style="text-align: -webkit-center;" class="portfolio-detail-title">${item.deskripsi}</h5>
		    </div>
		    <div class="portfolio-buttons">
		        <a href="img/portfolio/${item.gambar}" class="portfolio-zoom-link">
		            <i class="fas fa-search"></i>
		        </a>
		        <a href="${item.link}" class="portfolio-detail-link" target="_blank" rel="noopener noreferrer">
		            <i class="fas fa-link"></i>
		        </a>
		    </div>
		</div>`
	)
})
