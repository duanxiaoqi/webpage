```
sudo npm install -g gulp
npm init -y
npm install gulp --save-dev
npm install sass --save-dev
npm install gulp-sass --save-dev
npm install gulp-livereload --save-dev

gulp watch

```

新建gulpfile.js文件，复制代码

新建scss文件，  $default_fontsize = 设计稿宽度/16

```
$default_fontsize: 40px;

@function pxTorem($n: 0) {
    @return ($n * 1px) / $default_fontsize * 1rem;
}

```
index.html中插入自适应屏幕的js代码

```
	<script type="text/javascript">
	    !function(win) {
	        function resize() {
	            var domWidth = domEle.getBoundingClientRect().width;
	            win.rem = domWidth / 16;
	            domEle.style.fontSize = win.rem + "px"
	        }
	        var v, initial_scale, timeCode, dom = win.document,
	            domEle = dom.documentElement,
	            viewport = dom.querySelector('meta[name="viewport"]'),
	            flexible = dom.querySelector('meta[name="flexible"]');
	        if (viewport) {
	            var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
	            if (o) {
	                initial_scale = parseFloat(o[2]);
	                v = parseInt(1 / initial_scale)
	            }
	        } else {
	            if (flexible) {
	                var o = flexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
	                if (o) {
	                    v = parseFloat(o[2]);
	                    initial_scale = parseFloat((1 / v).toFixed(2))
	                }
	            }
	        }
	        if (!v && !initial_scale) {
	            var n = (win.navigator.appVersion.match(/android/gi), 
	                win.navigator.appVersion.match(/iphone/gi));
	                v = win.devicePixelRatio;
	                v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, 
	                initial_scale = 1 / v
	        }
	        if (domEle.setAttribute("data-dpr", v), !viewport) {
	            if (
	                viewport = dom.createElement("meta"), 
	                viewport.setAttribute("name", "viewport"), 
	                viewport.setAttribute(
	                    "content", 
	                    "initial-scale=" + 
	                        initial_scale + 
	                        ", maximum-scale=" + initial_scale + 
	                        ", minimum-scale=" + initial_scale + 
	                        ", user-scalable=no"
	                ), 
	                domEle.firstElementChild
	            ) {
	                domEle.firstElementChild.appendChild(viewport)
	            } else {
	                var m = dom.createElement("div");
	                m.appendChild(viewport), dom.write(m.innerHTML)
	            }
	        }
	        win.dpr = v;
	        win.addEventListener("resize", function() {
	            clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
	        }, false);
	        win.addEventListener("pageshow", function(b) {
	            b.persisted && ( clearTimeout(timeCode), timeCode = setTimeout(resize, 300) )
	        }, false);
	        resize()
	    }(window);
    </script>

```