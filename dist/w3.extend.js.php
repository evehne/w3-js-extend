<?php
namespace w3\config\rtl
{
  const renderin = true;
  const ignore   = false;

  const folder   = '.' . DIRECTORY_SEPARATOR . 'rtl' . DIRECTORY_SEPARATOR;
  const files    = [
    'w3.rtl.common.js',
    'w3.rtl.attribute.js',
    'w3.rtl.events.js',
  ];

  const compress = false;
  const output   = 'w3.rtl.js';
}

namespace w3\config\components
{
  const renderin = true;
  const ignore   = false;

  const folder   = '.' . DIRECTORY_SEPARATOR . 'components' . DIRECTORY_SEPARATOR;
  const files    = [
    'w3.compo.mainmenu.js',
    'w3.compo.modal.js',
  ];

  const compress = false;
  const output   = 'w3.components.js';
}

namespace
{
  if( \w3\config\rtl\renderin || \w3\config\components\renderin )
  {
    header('Content-Type: application/javascript');
  }

  if( !\w3\config\rtl\ignore )
  {
    $content = [];
    foreach(\w3\config\rtl\files as $file)
    {
      $content[] = file_get_contents( \w3\config\rtl\folder . $file, FILE_USE_INCLUDE_PATH);
    }
    $content = implode("\n", $content);
    if( \w3\config\rtl\renderin )
    {
      echo $content;
    }
    else
    {
      file_put_contents( dirname(__FILE__) . '\\' . \w3\config\rtl\output, $content);
    }
  }

  if( !\w3\config\components\ignore )
  {
    $content = [];
    foreach(\w3\config\components\files as $file)
    {
      $content[] = file_get_contents( \w3\config\components\folder . $file, FILE_USE_INCLUDE_PATH);
    }
    $content = implode("\n", $content);
    if( \w3\config\rtl\renderin )
    {
      echo $content;
    }
    else
    {
      file_put_contents( dirname(__FILE__) . '\\' . \w3\config\components\output, $content);
    }
  }

  die();
}
?>
