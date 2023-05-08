<?php

include_once "../../store/app/Mage.php";

error_reporting(E_ALL);
ini_set("display_errors", 1);

//Zend_Debug::dump( $this->getRequest()->getParams() );

if(isset($_POST['pontoon_estimate']))
{
    Mage::app();
    Mage::getSingleton('core/session', array('name' => 'frontend'));
    $session = Mage::getSingleton('checkout/session');

    $cart = Mage::getSingleton('checkout/cart');
    $rawProducts = isset($_POST['products']) ? json_decode($_POST['products']) : array();

    for($i = 0;$i < count($rawProducts);$i++) {

        $product = Mage::getModel('catalog/product')->load($rawProducts[$i]->id);
        $options = '';

        if(isset($rawProducts[$i]->options->small->optionId)) {
            $options = array($rawProducts[$i]->options->small->optionId => $rawProducts[$i]->options->small->optionValue);
        }

        $cart->addProduct($product, array(
		
			// 'qty' => $rawProducts[$i]->quantity - 1,
            'qty' => $rawProducts[$i]->quantity + 0,
            'options' => $options
        ));
    }


    $cart->save();
    $session->setCartWasUpdated(true);


    echo json_encode(array("status" => "success"));
}
else {
    echo json_encode(array("status" => "error", "message" => "Products not set"));
}
exit;



















