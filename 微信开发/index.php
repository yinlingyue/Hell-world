<?php
    require_once "jssdk.php";
    $jssdk = new JSSDK("wx68ada25b4d22bfaf", "fdce8ab191adfd2de897c75ab855136f");
    $signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title></title>

    <style>
        .photo-btn {
            width: 80px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin: 30px 0 0 100px;
        }

    </style>
</head>
<body>
    <input type="button" value="拍照" class="js-photoBtn photo-btn">
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="http://zeptojs.com/zepto.min.js"></script>
<script>
    function Page() {
        this.neededAPI = ["chooseImage", "uploadImage", "downloadImage"];
    }

    $.extend(Page.prototype, {
        init: function() {
            this.initConfig();
            this.waitBridge();
        },

        initConfig: function() {
            wx.config({
                debug: true,
                appId: '<?php echo $signPackage["appId"];?>',
                timestamp: <?php echo $signPackage["timestamp"];?>,
                nonceStr: '<?php echo $signPackage["nonceStr"];?>',
                signature: '<?php echo $signPackage["signature"];?>',
                jsApiList: this.neededAPI
            });

        },

        waitBridge: function() {
            wx.ready($.proxy(this.handeleBrigeReady, this));
        },

        handeleBrigeReady: function() {
            this.bindEvents();
        },

        bindEvents: function() {
            var photoBtn = $(".js-photoBtn");
            photoBtn.on("click", $.proxy(this.handlePhotoBtnClick, this));
        },

        handlePhotoBtnClick: function() {
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], 
                success: $.proxy(this.hadneleChooseImgSucc, this)
            });
        },

        hadneleChooseImgSucc: function(res) {
            var localIds = res.localIds,// 可以指定来源是相册还是相机，默认二者都有
                localId = localIds[0];
            
            wx.uploadImage({
                localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: $.proxy(this.hadneleImageUpSucc, this)
            });
        },

        hadneleImageUpSucc: function(res) {
            var serverId = res.serverId;// 返回图片的服务器端ID
            
            wx.downloadImage({
                serverId: '', // 需要下载的图片的服务器端ID，由uploadImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success:  $.proxy(this.hadneleImageDownSucc, this)
            });
        },

        hadneleImageUpSucc: function(res) {
            var localId = res.localId;// 返回图片下载后的本地ID
        }

    });

    var page = new Page();
    page.init();

</script>
</html>
