function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;

	var parent = dom.parentNode;

	var progressFrame = document.createElement("img");
	progressFrame.src = "TemplateData/loadingbar.png"; 
	progressFrame.style.position = "absolute";
	parent.appendChild(progressFrame);
	this.progressFrame = progressFrame;

	var progressBar = document.createElement("img");
	progressBar.src = "TemplateData/fullbar.png"; 
	progressBar.style.position = "absolute";
	parent.appendChild(progressBar);
	this.progressBar = progressBar;

	var messageArea = document.createElement("p");
	messageArea.style.position = "absolute";
	parent.appendChild(messageArea);
	this.messageArea = messageArea;


	this.SetProgress = function (progress) { 
		if (this.progress < progress)
			this.progress = progress;
						 
		this.messageArea.style.display = "none";
		this.progressFrame.style.display = "inline";
		this.progressBar.style.display = "inline";			
		this.Update();
	}

	this.SetMessage = function (message) { 
		this.message = message; 
		this.progressFrame.style.display = "none";
		this.progressBar.style.display = "none";			
		this.Update();
	}

	this.Clear = function() {
		this.messageArea.style.display = "none";
		this.progressFrame.style.display = "none";
		this.progressBar.style.display = "none";
	}

	this.Update = function() {

		var progressFrameImg = new Image();
		progressFrameImg.src = this.progressFrame.src;
		
		this.progressFrame.style.top = this.dom.offsetTop + (this.dom.offsetHeight * 0.5 + 50) + 'px';
		this.progressFrame.style.left = this.dom.offsetLeft + (this.dom.offsetWidth * 0.5 - 128) + 'px';
		this.progressFrame.width = progressFrameImg.width;
		this.progressFrame.height = progressFrameImg.height;

		this.progressBar.style.top = this.progressFrame.style.top;
		this.progressBar.style.left = this.progressFrame.style.left;
		this.progressBar.width = progressFrameImg.width * Math.min(this.progress, 1);
		this.progressBar.height = progressFrameImg.height;

		this.messageArea.style.top = this.progressFrame.style.top;
		this.messageArea.style.left = 0;
		this.messageArea.style.width = '100%';
		this.messageArea.style.textAlign = 'center';
		this.messageArea.innerHTML = this.message;
	}

	this.Update ();
}