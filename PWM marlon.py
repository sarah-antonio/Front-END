from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led_azul = PWM(Pin(14))
led_azul.freq(1000)

#iniciando o LED deligado!
led_azul.duty_u16(0)


while True:
    leitura_pot = potenciometro.read_u16()
    led_azul.duty_u16(leitura_pot)
    
    print("valor leitura Potenciometr", leitura_pot)
    sleep(0.5)
    
     