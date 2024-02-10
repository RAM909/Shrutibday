const username = 'shruti'
const password = '11022004'

let inputAreas = document.getElementsByTagName('input'),
	switchBtn = document.getElementById('btn-switch-frame'),
	emptyPanel = document.getElementById('panel-empty'),
	loginPanel = document.getElementById('panel-login'),
	regPanel = document.getElementById('panel-reg'),
	loginUsernameInput = document.getElementById('input-login-username'),
	loginPwdInput = document.getElementById('input-login-password'),
	loginBtn = document.getElementById('btn-login'),
	isRegShown = false;

	loginBtn.disabled = true

Array.from(inputAreas).forEach(elem => {
	elem.onfocus = () => {
		elem.previousElementSibling.classList.add('cl-animation-scale-up-out');
		elem.nextElementSibling.classList.remove('cl-animation-focus-out-short');
		elem.nextElementSibling.classList.add('cl-animation-focus-in-long');
	};

	elem.onblur = () => {
		if (elem.value === '') {
			elem.previousElementSibling.classList.remove('cl-animation-scale-up-out');
			elem.previousElementSibling.classList.add('cl-animation-scale-down-in');
		}
		elem.nextElementSibling.classList.remove('cl-animation-focus-in-long');
		elem.nextElementSibling.classList.add('cl-animation-focus-out-short');
	};
});

switchBtn.onclick = function () {
	if (!isRegShown) {
		this.classList.remove('cl-animation-rotate-round-out');
		this.classList.add('cl-animation-rotate-round-in');
		emptyPanel.classList.remove('cl-animation-empty-panel-scale-in');
		emptyPanel.classList.add('cl-animation-empty-panel-scale-out');
		loginPanel.classList.remove('cl-animation-panel-scale-in');
		loginPanel.classList.add('cl-animation-panel-scale-out');
		regPanel.classList.remove('cl-animation-spread-out');
		regPanel.classList.add('cl-animation-spread-in');
		isRegShown = true;
	} else {
		this.classList.remove('cl-animation-rotate-round-in');
		this.classList.add('cl-animation-rotate-round-out');
		emptyPanel.classList.remove('cl-animation-empty-panel-scale-out');
		emptyPanel.classList.add('cl-animation-empty-panel-scale-in');
		loginPanel.classList.remove('cl-animation-panel-scale-out');
		loginPanel.classList.add('cl-animation-panel-scale-in');
		regPanel.classList.remove('cl-animation-spread-in');
		regPanel.classList.add('cl-animation-spread-out');
		isRegShown = false;
	}
};

let userInfo = [];
let flag = false
loginPwdInput.onchange = function (event) {
	if (event.target.value === password) {
		userInfo.push(event.target.value);
		loginBtn.disabled = false
	} else {
		userInfo.pop();
	}

	if (userInfo.length === 2) {
		loginBtn.classList.remove('cl-animation-center-rotate-out');
		loginBtn.classList.add('cl-animation-center-rotate-in');
		loginBtn.disabled = false

	} else {
		loginBtn.classList.remove('cl-animation-center-rotate-in');
		loginBtn.classList.add('cl-animation-center-rotate-out');
	}
};

loginUsernameInput.onchange = function () {
	if (event.target.value === username) {
		userInfo.push(event.target.value);
	} else {
		userInfo.pop();
	}

	if (userInfo.length === 2) {
		loginBtn.classList.remove('cl-animation-center-rotate-out');
		loginBtn.classList.add('cl-animation-center-rotate-in');
	} else {
		loginBtn.classList.remove('cl-animation-center-rotate-in');
		loginBtn.classList.add('cl-animation-center-rotate-out');
	}
};

function redirect() {
	window.location.href = '../HAPP2/hap.html';
}

document.getElementById("toggleButton1").addEventListener("click", function(event) {
    var label = document.getElementById("hint1");
    var line = document.getElementById("line1");
    if (label.style.display === "none") {
        label.style.display = "inline";
        line.style.display = "none";
    } else {
        label.style.display = "none"; 
        line.style.display = "inline";
    }
    event.preventDefault(); 
});

document.getElementById("toggleButton2").addEventListener("click", function(event) {
    var label = document.getElementById("hint2");
    var line = document.getElementById("line2");
    if (label.style.display === "none" ) {
        label.style.display = "inline";
        line.style.display = "none";
    } else {
        label.style.display = "none"; 
        line.style.display = "inline";
    }
    event.preventDefault(); 
});

document.getElementById("toggleButton3").addEventListener("click", function(event) {
    var label = document.getElementById("hint3");
    var line = document.getElementById("line3");
    if (label.style.display === "none") {
        label.style.display = "inline";
        line.style.display = "none";
    } else {
        label.style.display = "none"; 
        line.style.display = "inline";
    }
    event.preventDefault(); 
});