using System;
using System.Collections.Generic;
/*
 * Parašykite metodą, kuris priima tekstų masyvą kaip argumentą, 
 * o grąžina masyvą tekstų, turinčių daugiausiai iš eilės pasikartojančių raidžių.
 */

namespace text_array {
    class Program {
        static void Main(string[] args) {
            int count = 0;

            //teksto masyvas.
            string[] text_array;
            text_array = new string[] {
                "aaabbccc",
                "kkaaccc",
                "ggldeerrr",
                "emmm",
                "haha hhhhha",
                "asgdkggggd"
            };

            string[] str_array = new string[10];

            Text_To_Array(text_array, count, str_array);
            foreach(string text in str_array)
            Console.WriteLine(text);
        }

        static string[] Text_To_Array(string[] text_array, int count, string[] str_array) {

            //string[] str_array = new string[99];
            count = 0;


            foreach(string text in text_array) {


                for (var i = 0; i < text.Length; i++) {
                    int it_count = 1;
                    for (int j = i + 1; j < text.Length; j++) {
                        if (text[i] != text[j])
                            break;
                        it_count++;


                    }

                    //Patikrinama ar iteracijų kiekis didesnis nei esamas.
                    if (it_count > count) {
                        //jei iteracijų kiekis yra didesnis už esamą, perrašoma esamu.
                        count = it_count;

                        List < string > str_list = new List < string > ();

                        str_list.Add(text);
                        string[] str_array = str_list.ToArray();


                    }

                }

            }


            return str_array;
        }
    }
}