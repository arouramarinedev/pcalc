<?php
if(isset($_POST['submit'])) {

    $user_name = $_POST['name'];
    $user_email = $_POST['email'];
    $app_selected = $_POST['radio'];
    $app_url = "";

    $db = new PDO("mysql:host=localhost;dbname=auroram1_auroramari;", "root", "Ami_-+2017##alumeTRON#@!-17=_+_=");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try {

        $qu = "SELECT email FROM pontoon_calculator WHERE email LIKE '%".$user_email."%'";
        $result = $db->query($qu);

        if($result->rowCount() < 1) {
            $q = "INSERT INTO pontoon_calculator VALUES (null, :name, :email, :app_selected, NOW())";
            $stmt = $db->prepare($q);
            $isSaved = $stmt->execute(array(
                ":name" => $user_name,
                ":email" => $user_email,
                ":app_selected" => $app_selected
            ));
        }

        
    } catch (PDOException $e) {
        //print_r($stmt->errorInfo());
    }

    switch($app_selected) {
        case "android":
            $app_url = "https://play.google.com/store/apps/details?id=com.aurora.iprogrammers.aurora&hl=en";
            break;
        case "ios":
            $app_url = "https://www.auroramarine.com/calculator/pontoons.html?email=".$user_email;
            break;
        case "desktop":
            $app_url = "https://www.auroramarine.com/calculator/pontoons.html?email=".$user_email;
            break;
        default:
            $app_url = "https://www.auroramarine.com/calculator/pontoons.html?email=".$user_email;
            break;
    }

	$to = $user_email;
	$subject = "Pontoon Calculator App";
    $headers = "From: Aurora Marine<" . strip_tags("mail@auroramarine.com") . ">\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    ob_start();
?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{{subject}}</title>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-11740439-2', 'auto');
            ga('send', 'pageview');

        </script>
        <style type="text/css">
            body {
                padding-top: 0 !important;
                padding-bottom: 0 !important;
                padding-top: 0 !important;
                padding-bottom: 0 !important;
                margin:0 !important;
                width: 100% !important;
                -webkit-text-size-adjust: 100% !important;
                -ms-text-size-adjust: 100% !important;
                -webkit-font-smoothing: antialiased !important;
            }
            .tableContent img {
                border: 0 !important;
                display: block !important;
                outline: none !important;
            }
            a{
                color:#382F2E;
            }

            p, h1{
                color:#00549A !important;
            }
            h2{
                color:#382F2E;
                font-size: 21px;
                margin:0;
                font-weight:normal;
                font-family:Georgia, serif;
            }
            a{
                color:#382F2E;
                font-size: 14px;
                margin:0;
                line-height: 45px;
                font-family:Georgia, serif;
            }

            p{
                color:#967B76;
                font-size: 16px;
                margin:0;
                line-height: 22px;
                font-family:Georgia, serif;
            }
            .bgBody{
                background: #ffffff;
            }
        </style>

        <script type="colorScheme" class="swatch active">
  {
    "name":"Default",
    "bgBody":"d1d2d4",
    "link":"382F2E",
    "color":"967B76",
    "bgItem":"ffffff",
    "title":"382F2E"
  }
</script>
    </head>
    <body paddingwidth="0" paddingheight="0"  style="padding-top: 0; padding-bottom: 0; padding-top: 0; padding-bottom: 0; background-repeat: repeat; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased;" offset="0" toppadding="0" leftpadding="0">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableContent bgBody" align="center" >
        <!--header-->
        <tr>
            <td valign='top'>
                <table  width="700" border="0" cellspacing="0" cellpadding="0" align="center" style='background-color:#ffffff;font-family:Georgia, serif;' >

                    <tr>
                        <td class='movableContentContainer bgItem' >

                            <div class='movableContent'>
                                <table width="700" border="0" cellspacing="0" cellpadding="0" align="center">
                                    <tr >
                                        <td bgcolor='#ffffff'valign='top' align="center" width='600' >
                                            <table width="700" border="0" cellspacing="0" cellpadding="0" align="center">
                                                <tr>
                                                    <td width='20'>&nbsp;</td>
                                                    <td width='280' align='left' style='padding:15px 0;'>
                                                        <div class="contentEditableContainer contentImageEditable">
                                                            <div class="contentEditable" >
                                                                <a href="https://www.auroramarine.com" target="_blank">
                                                                    <img src="https://www.auroramarine.com/images/am-logo.png" alt='Aurora Marine Ind. Logo' data-default="placeholder" data-max-width="280" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td width='280'>
<!--                                                        <table width="280" border="0" cellspacing="0" cellpadding="0" align="center" style='background-color:#ffffff;font-family: Verdana, sans-serif;'>
                                                            <tr>
                                                                <td width='60' align='right'>
                                                                    <div class="contentEditableContainer contentFacebookEditable">
                                                                        <div class="contentEditable">
                                                                            <a href="https://www.facebook.com/AuroraMarineInd" title="Aurora Marine Facebook Account" target="_blank">
                                                                                <img src="https://www.auroramarine.com/images/social-icons/Facebook-48.png" alt='facebook icon' width='35' height='35' data-default="placeholder" data-max-width="35" data-customIcon="true" data-noText="false">
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td width='45' align='right'>
                                                                    <div class="contentEditableContainer contentTwitterEditable">
                                                                        <div class="contentEditable" >
                                                                            <a href="https://twitter.com/auroramarineinc" title="Aurora Marine Twitter Account" target="_blank">
                                                                                <img src="https://www.auroramarine.com/images/social-icons/Twitter-48.png" alt='twitter icon' width='35' height='35' data-default="placeholder" data-max-width="35" data-customIcon="true" data-noText="false">
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td width='175' align='right'>
                                                                    <div class="contentEditableContainer contentTextEditable">
                                                                        <div class="contentEditable" >
                                                                            <a target='_blank' href="https://www.auroramarine.com" style='padding:10px 18px;color:white;background:#252F95;text-decoration:none;font-weight:bold;font-size:13px;border-radius:30px;’-moz-border-radius:30px;-webkit-border-radius:30px;font-family:Georgia, serif;'>Visit our website</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>-->
                                                    </td>
                                                    <td width='20'>&nbsp;</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div class='movableContent'>
                                <table width="700" border="0" cellspacing="0" cellpadding="0" align="center">
                                    <tr >
                                        <td style='padding: 20px;' >
                                            <div class="contentEditableContainer contentTextEditable">
                                                <div class="contentEditable">
                                                    <p style="margin-bottom: 15px;color:#00549A">Hi <?php echo ucfirst($user_name) ?>, <br /></p>
                                                    <p style='font-size: 16px;margin:0;font-family:Georgia, serif;font-style:normal;'>
                                                        Click on the link below to get your Free Pontoon Estimator App.<br />
                                                        <a href="<?php echo $app_url; ?>" title="Aluminum Pontoon Area and Product Quantity Quick Estimator">Aluminum Pontoon Area and Product Quantity Quick Estimator app</a>
                                                        <br>
                                                        <br>
                                                        <!--<a href="https://play.google.com/store/apps/details?id=com.aurora.iprogrammers.aurora&hl=en" title="Aluminum Pontoon Area and Product Quantity Quick Estimator">Click here to get it on the Google Play Store for Android</a>

                                                        <br /><br />-->
                                                        <span>Best regards,</span>
                                                        <br />
                                                        <span>Captain Aurora</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- end footer-->

    </table>

    </body>
    </html>

    <?php
    $message = ob_get_clean();

    mail($to, $subject, $message, $headers);
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Access Our Aluminum Pontoon Area and Product Quantity Quick Estimator</title>
    <meta name="description" content="To Estimate the amount of product you will require to clean your pontoons, remove algae and other marine fouling ..."/>
    <meta name="keywords" content="Pontoon Calculator, Aurora marine product quantity calculator, calculate how many aurora products you need"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,700" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="site-container">
    <div class="section section-content" id="section-content">
        <div class="video-wrap" id="section-content-video-wrap">
            <p>
                Your Aluminum Pontoon Area Calculator &amp; Product Quantity Estimator Free App has been sent to your email address. 
                <br>
                <br>
                Click on the link in your email to start using your App.
                <br>
                <br>
                If you don't see the email, check your spam box to make sure that it was not redirected there.
                <!--<br>
                <br>
                <a href="https://play.google.com/store/apps/details?id=com.aurora.iprogrammers.aurora&hl=en" title="Aluminum Pontoon Area Calculator and Product Quantity Quick Estimator" style="color:#fff; font-size: 20px;">Click here to get it on the Google Play Store for Android</a>-->
            </p>
        </div>
    </div>
</div>

<div class="site-footer">
    <p id="site-footer">Copyright &copy; 2016. <u>Aurora Marine</u></p>
</div>
</body>
</html>