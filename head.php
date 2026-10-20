<?php
# 2025/5/19
#直接定義靜態資料
$data = [
    'src' => 'https://dgm1.tw/',
    'title' => '東基M1｜新店核心雙捷運｜大坪林站約250公尺｜官網',
    'description' => '東基M1：一站進北市，繁華靜巷，3分鐘步抵雙捷運，商圈機能完善，鄰近裕隆城、景美溪河濱公園，【耐震標章建築】1-4房',
    'keyword' => '東基M1,新店建案,央北重劃區,大坪林建案,新店買房'
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
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">