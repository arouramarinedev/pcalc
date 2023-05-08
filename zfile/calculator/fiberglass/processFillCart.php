<?php

include_once "../../store/app/Mage.php";

if(isset($_POST['fiberglass_estimate']))
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
            'qty' => $rawProducts[$i]->quantity,
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



































/*$config = array();
$config["soap_url"] = "https://www.auroramarine.com/store/api/soap/?wsdl";
$config["login"] = "petar@auroramarine.com";
$config["password"] = "com.auroramarine@petar";
$config["customer_as_guest"] = TRUE;

if(isset($_POST['pontoon_estimate']))
{
    $proxy = new SoapClient($config["soap_url"], array('trace'=>1));
    $sessionId = $proxy->login($config["login"], $config["password"]);
    $shoppingCartIncrementId = $proxy->call( $sessionId, 'cart.create');

    $rawProducts = isset($_POST['products']) ? json_decode($_POST['products']) : array();
    $products = array();

    for($i = 0;$i < count($rawProducts);$i++) {
        $product = array();
        $product['product_id'] = $rawProducts[$i]->id;
        $product['quantity'] =  $rawProducts[$i]->quantity;

        if(isset($rawProducts[$i]->options)) {
            $product['options'] = array(
                $rawProducts[$i]->options->small->optionId => $rawProducts[$i]->options->small->optionValue
            );
        };

        array_push($products, $product);
    }

    $resultCartProductAdd = $proxy->call($sessionId, "cart_product.add",
        array(
            $shoppingCartIncrementId,
            $products
        )
    );

    if ($resultCartProductAdd)
        echo json_encode(array("status" => "success", "shopping_cart_id" => $shoppingCartIncrementId));
    else
        echo json_encode(array("status" => "error", "message" => "Products are not added to the cart."));

}
else {
    echo json_encode(array("status" => "error", "message" => "Products not set"));
}

exit;*/







/*$arrProducts = array(
    array(
        "product_id" => 12281,
        "quantity" => 1,
        "options" => array(
            optionId_1 => optionValue_1,
            optionId_n => optionValue_n
         )
    ),
    array(
        "product_id" => 9990,
        "quantity" => 1
    ),
    array(
        "product_id" => 9988,
        "quantity" => 1
    ),
    array(
        "product_id" => 9957,
        "quantity" => 1
    )
);*/




