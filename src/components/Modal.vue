<template>
    <div class="modal-comp" :class="position" @click.self="hideClickOut && closeModal()">
        <div class="modal-cont" :style="{'width': size ? size : '50%'}">
            <header class="modal-card-head" :class="{'blue-title': blueTitle, 'hide-border': hideBorder}">
                <slot name="modal-title" class="modal-title">Modal title</slot>
                <button v-if="crossBtn" type="default" class="close" :class="{'big' : sizeCloseIcon === 'lg', 'medium': sizeCloseIcon === 'md'}" @click="closeModal()">
                    <x-icon size="15" class="custom-class"></x-icon>
                </button>
            </header>
            <section class="modal-card-body">
                <slot name="content">
                    Modal Body
                </slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="modal-footer">
                </slot>
            </footer>
        </div>
    </div>
</template>
<script>
import { XIcon } from 'vue-feather-icons'
export default {
    name: "Modal",
    props: ['size', 'sizeCloseIcon', 'crossBtn', 'blueTitle', 'position', 'hideClickOut', 'hideBorder'],
    components: { XIcon },
    data() {
        return {
            landed: false
        }
    },
    mounted() {
        if (!this.closeBtn) {
            this.closeBtn = false;
        }
    },
    methods: {
        closeModalAfterClickOut(status) {
            if (this.landed) {
                this.landed = status
                this.closeModal()
            }
            this.landed = status
        },
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>
<style scoped lang="scss">
.modal-comp {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(#000, .3);
    display: flex;
    align-items: center;
    justify-content: center;

    &.top-right {
        align-items: flex-start;
        justify-content: flex-end;
    }

    &.top-left {
        align-items: flex-start;
        justify-content: flex-start;
    }

    &.bottom-right {
        align-items: flex-end;
        justify-content: flex-end;
    }

    &.bottom-left {
        align-items: flex-end;
        justify-content: flex-start;
    }

    .modal-cont {
        background-color: white;
        border-radius: 4px;
        overflow: hidden;
        max-height: 90vh;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        margin: 10px 20px;
    }

    .modal-card-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid #e2e2e2;

        &.blue-title {
            display: flex;
            align-items: center;
            background-color: #409eff;
            color: white;
        }
    }

    .blue-title>.close {
        color: white;
    }

    .modal-card-body {
        overflow: auto;
        // margin: 0 20px;
        text-transform: initial;
        color: lighten(#000, 10);
        flex: 1;
    }

    .modal-card-foot {
        border-top: 1px solid #e2e2e2;
        padding: 10px 20px;
        background-color: white;
        text-transform: initial;
        text-align: right;
    }

    .close {
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        outline: none;
    }

    .big {
        font-size: 25px;
    }

    .medium {
        font-size: 20px;
    }

    .hide-border {
        border: none
    }

}

@media (max-width: 1024px) {
    .modal-comp {
        .modal-cont {
            width: 450px;
        }
    }
}
</style>