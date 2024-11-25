"use client";

import { useEffect } from 'react';
import styles from './header.module.css';

const Header = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const menuBar = document.getElementById('menuBar');
            const menuIcon = document.getElementById('menuIcon');

            const sideMenu = document.createElement('div');
            sideMenu.id = 'sideMenu';
            sideMenu.className = styles.sideMenu;

            const menulat = [
                { nome: 'Conta', url: '/conta' },
                { nome: 'Configurações', url: '/config' },
                { nome: 'Requerimentos', url: '/req' },
            ];

            let nameTi = document.createElement('h1');
            let txtname = document.createTextNode('Fulano Medeiros da Silva de oliveira');
            nameTi.className = styles.nameTi;
            nameTi.appendChild(txtname);
            sideMenu.appendChild(nameTi);

            const closeBtn = document.createElement('a');
            closeBtn.href = 'javascript:void(0)';
            closeBtn.addEventListener('click', closeSideMenu);
            sideMenu.appendChild(closeBtn);

            menulat.forEach(item => {
                const sidelink = document.createElement('a');
                sidelink.href = item.url;
                sidelink.textContent = item.nome;
                sidelink.className = styles.sidelink;
                sideMenu.appendChild(sidelink);
            });

            document.body.appendChild(sideMenu);

            function openSideMenu() {
                sideMenu.style.width = '250px';
            }

            function closeSideMenu() {
                sideMenu.style.width = '0';
            }

            let isMenuOpen = false;

            menuIcon.addEventListener('click', function () {
                if (isMenuOpen) {
                    closeSideMenu();
                } else {
                    openSideMenu();
                }
                isMenuOpen = !isMenuOpen;
            });
        }
    }, []);

    return (
        <header id="menuBar" className={styles.menuBar}>
            <div id="menuIcon" className={styles.menuIcon}></div>
            <div className={styles.linkDiv}>
                <a href="/" className={styles.link}>Home</a>
                <a href="/solicitar_atendimento_index" className={styles.link}>Atendimento</a>
                <a href="/eventos" className={styles.link}>Eventos</a>
                <a href="/doacoes" className={styles.link}>Doações</a>
            </div>
        </header>
    );
};

export default Header;
