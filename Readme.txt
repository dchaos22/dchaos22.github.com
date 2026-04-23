To work on this website with PHP. You need to follow this Instruction:


1. Install XAMPP
	Website: https://www.apachefriends.org/
	Note: Relocate your project folder inside xampp folder
	
2. Install Composer autoloader
	Website: https://getcomposer.org/download
	Note: Download the Composer-Setup.exe installer for Windows.
		- It will ask for your PHP path. Point it to your XAMPP PHP (usually C:\xampp\php\php.exe).
		- Leave defaults for everything else.	
	After Install:
		Run this in command prompt:
			composer -V
			
	Once Composer is installed, go back to your project folder:
		Run this in command prompt:
		cd C:\xampp\htdocs\islabank
		composer require phpmailer/phpmailer

3. Enable the PHP zip extension in XAMPP
		Go to C:\xampp\php\php.ini
		Search in php.ini = ";extension=zip" and change to "extension=zip", you just remove the ;
		
	Retry the Composer command

		Open Command Prompt again.
		Navigate to your project folder:
		
		cd C:\xampp\htdocs\islabank
		composer require phpmailer/phpmailer

		Dapag gagana kapag na install mo na ang Composer
		C:\xampp\htdocs\islabank\vendor\autoload.php
		
Quick Sanity Check

After Installation
composer show phpmailer/phpmailer

You should see PHPMailer listed with its version. Then your require __DIR__ . '/vendor/autoload.php'; line will work.

OPTIONAL:
If Cant find the text extension from the start-of-file to caret

4. Enable the PHP zip extension in XAMPP
		Go to C:\xampp\php\php.ini
	
