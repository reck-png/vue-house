<?php
# 2025/8/1
#直接定義靜態資料
$data = [
    'src' => 'https://chunfu-yueyue.tw/',
    'title' => '春福安南新案｜北安新核心・商60｜官網',
    'description' => '春福安南新案：立即預約，悦見未來，06-2690111。',
    'keyword' => '商60,安南區,北安生活圈,安中路,草湖寮'
];

$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
?>

<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<!--<meta property="og:image" content="<?php echo $src; ?>og.jpg" />-->
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">