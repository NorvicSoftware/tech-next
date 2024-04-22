<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Person;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $person1 = new Person;
        $person1->first_name = "Cristian";
        $person1->last_name = "Barrios";
        $person1->save();
        $image1 = new Image();
        $image1->url = 'images/users/man.jpg';
        $image1->imageable()->associate($person1);
        $image1->save();

        $person2 = new Person;
        $person2->first_name = "Americo";
        $person2->last_name = "Alvarez";
        $person2->save();
        $image2 = new Image();
        $image2->url = 'images/users/man.jpg';
        $image2->imageable()->associate($person2);
        $image2->save();

        $person3 = new Person;
        $person3->first_name = "Sara";
        $person3->last_name = "Zurita";
        $person3->save();
        $image3 = new Image();
        $image3->url = 'images/women.jpg';
        $image3->imageable()->associate($person3);
        $image3->save();

        $person4 = new Person;
        $person4->first_name = "Angel";
        $person4->last_name = "Tibubay";
        $person4->save();
        $image4 = new Image();
        $image4->url = 'images/man.jpg';
        $image4->imageable()->associate($person4);
        $image4->save();

        $person5 = new Person;
        $person5->first_name = "Diland";
        $person5->last_name = "Castellon";
        $person5->save();
        $image5 = new Image();
        $image5->url = 'images/man.jpg';
        $image5->imageable()->associate($person5);
        $image5->save();

        $person6 = new Person;
        $person6->first_name = "Sharol";
        $person6->last_name = "Ramos";
        $person6->save();
        $image6 = new Image();
        $image6->url = 'images/women.jpg';
        $image6->imageable()->associate($person6);
        $image6->save();

        $person7 = new Person;
        $person7->first_name = "Kevin";
        $person7->last_name = "Castellon";
        $person7->save();
        $image7 = new Image();
        $image7->url = 'images/man.jpg';
        $image7->imageable()->associate($person7);
        $image7->save();

        $person8 = new Person;
        $person8->first_name = "Esteysi";
        $person8->last_name = "Guzman";
        $person8->save();
        $image8 = new Image();
        $image8->url = 'images/women.jpg';
        $image8->imageable()->associate($person8);
        $image8->save();

        $person9 = new Person;
        $person9->first_name = "Carlos";
        $person9->last_name = "Fuentes";
        $person9->save();
        $image9 = new Image();
        $image9->url = 'images/man.jpg';
        $image9->imageable()->associate($person9);
        $image9->save();

        $person10 = new Person;
        $person10->first_name = "Alan";
        $person10->last_name = "Colque";
        $person10->save();
        $image10 = new Image();
        $image10->url = 'images/man.jpg';
        $image10->imageable()->associate($person10);
        $image10->save();

        $person11 = new Person;
        $person11->first_name = "Victor";
        $person11->last_name = "Seleme";
        $person11->save();
        $image11 = new Image();
        $image11->url = 'images/man.jpg';
        $image11->imageable()->associate($person11);
        $image11->save();

        $person12 = new Person;
        $person12->first_name = "Maide";
        $person12->last_name = "Mamani";
        $person12->save();
        $image12 = new Image();
        $image12->url = 'images/women.jpg';
        $image12->imageable()->associate($person12);
        $image12->save();

        $person13 = new Person;
        $person13->first_name = "Marisol";
        $person13->last_name = "Herrera";
        $person13->save();
        $image13 = new Image();
        $image13->url = 'images/women.jpg';
        $image13->imageable()->associate($person13);
        $image13->save();

        $person14 = new Person;
        $person14->first_name = "Adrian";
        $person14->last_name = "Gomez";
        $person14->save();
        $image14 = new Image();
        $image14->url = 'images/man.jpg';
        $image14->imageable()->associate($person14);
        $image14->save();

        $person15 = new Person;
        $person15->first_name = "Jhojan";
        $person15->last_name = "Coro";
        $person15->save();
        $image15 = new Image();
        $image15->url = 'images/man.jpg';
        $image15->imageable()->associate($person15);
        $image15->save();

        $person16 = new Person;
        $person16->first_name = "Deanira";
        $person16->last_name = "Chambi";
        $person16->save();
        $image16 = new Image();
        $image16->url = 'images/women.jpg';
        $image16->imageable()->associate($person16);
        $image16->save();

        $person17 = new Person;
        $person17->first_name = "Jahaziel";
        $person17->last_name = "Arce";
        $person17->save();
        $image17 = new Image();
        $image17->url = 'images/man.jpg';
        $image17->imageable()->associate($person17);
        $image17->save();

        $person18 = new Person;
        $person18->first_name = "Alcira";
        $person18->last_name = "Luque";
        $person18->save();
        $image18 = new Image();
        $image18->url = 'images/women.jpg';
        $image18->imageable()->associate($person18);
        $image18->save();

        $person19 = new Person;
        $person19->first_name = "Alexander";
        $person19->last_name = "Flores";
        $person19->save();
        $image19 = new Image();
        $image19->url = 'images/man.jpg';
        $image19->imageable()->associate($person19);
        $image19->save();

        $person20 = new Person;
        $person20->first_name = "Kevin";
        $person20->last_name = "Poma";
        $person20->save();
        $image20 = new Image();
        $image20->url = 'images/man.jpg';
        $image20->imageable()->associate($person20);
        $image20->save();
    }
}
